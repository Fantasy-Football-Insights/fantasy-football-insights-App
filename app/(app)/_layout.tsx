import { Redirect, Stack } from "expo-router";

import { useAuth } from "../../components/context/AuthContext";

const StackLayout = () => {
  const { authenticated } = useAuth();

  // if user is not authenticated, return to index screen

  if (!authenticated) {
    return <Redirect href={"/home"} />;
  }

  return <Stack />;

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

export default StackLayout;
