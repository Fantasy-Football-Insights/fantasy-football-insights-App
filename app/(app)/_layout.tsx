import { Redirect, Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

import { useAuth } from "../../components/context/AuthContext";

const Layout = () => {
  const { authenticated } = useAuth();

  // if user is not authenticated, return to index screen

  if (!authenticated) {
    return <Redirect href={"/home"} />;
  }

  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
  

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#2F2E2E",
          },
          headerTintColor: "#EE0C0C",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
