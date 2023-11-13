import { useAsync } from "@react-hookz/web";
import axios from "axios";
import { SplashScreen } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";
import { UserModel, getUser } from "../../app/api/users";

interface AuthContextProps {
  authenticated: boolean;
  user: UserModel;
  session: {
    create: (token: string) => void;
    load: () => void;
    end: () => void;
    refresh: () => void;
  };
}

const TOKEN_KEY = "token";
const AuthContext = createContext<AuthContextProps>(null!);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [userRequest, userActions] = useAsync(async () => {
    const response = await getUser();
    return response;
  });

  const [refreshRequest, refreshActions] = useAsync(async () => {
    const response = await getUser();
    return response;
  });

  const [authenticated, setAuthenticated] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false);

  // axios interceptors
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response.status === 401 && authenticated) {
        setAuthenticated(false);
        axios.defaults.headers.common["Authorization"] = "";
        await SecureStore.deleteItemAsync(TOKEN_KEY);
      }
      return Promise.reject(error);
    }
  );

  const loadSession = async () => {
    console.log("loading session");
    const token = await SecureStore.getItemAsync(TOKEN_KEY);
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      userActions.execute();
    } else {
      axios.defaults.headers.common["Authorization"] = "";
      userActions.execute();
    }
  };

  const refreshSession = async () => {
    console.log("refreshing session");
    refreshActions.execute();
  };

  const endSession = async () => {
    axios.defaults.headers.common["Authorization"] = "";
    await SecureStore.deleteItemAsync(TOKEN_KEY).then(() => {
      loadSession();
    });
  };

  const createSession = async (token: string) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await SecureStore.setItemAsync(TOKEN_KEY, token);
    loadSession();
  };

  const session = {
    load: loadSession,
    end: endSession,
    create: createSession,
    refresh: refreshSession,
  };

  if (userRequest.status === "success" && userRequest.result) {
    if (!authenticated) {
      setAuthenticated(true);
      setInitialLoad(true);
    }
  } else {
    if (authenticated) {
      setAuthenticated(false);
      setInitialLoad(true);
    }
  }

  const value = {
    authenticated: authenticated,
    user: (refreshRequest.result
      ? refreshRequest.result
      : userRequest.result) as UserModel,
    session: session,
  };

  useEffect(() => {
    if (userRequest.status === "not-executed" && !userRequest.result) {
      loadSession();
    }
  }, []);

  // only show loading screen once on initial load (need to set a 1 time state)
  if (userRequest.status === "loading" && !initialLoad) {
    return <SplashScreen />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
