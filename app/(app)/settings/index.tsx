import { Button, ButtonText, VStack } from "@gluestack-ui/themed";
import { Stack, useRouter } from "expo-router";
import { useAuth } from "../../../components/context/AuthContext";

export default function Settings() {
  const { session } = useAuth();
  const router = useRouter();

  const logout = () => {
    session.end();
    router.push("/(auth)/login/");
  };

  const deleteAccount = () => {};

  return (
    <VStack>
      <Stack.Screen
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: "#2F2E2E",
          },
          headerTintColor: "#EE0C0C",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
      <Button onPress={logout}>
        <ButtonText>Logout</ButtonText>
      </Button>
      <Button onPress={deleteAccount}>
        <ButtonText>Delete Account</ButtonText>
      </Button>
    </VStack>
  );
}
