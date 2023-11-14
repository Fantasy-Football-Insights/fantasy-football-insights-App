import { Box, Button, ButtonText, VStack } from "@gluestack-ui/themed";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native";
import { useAuth } from "../../components/context/AuthContext";

export default function App() {
  const { session } = useAuth();
  const router = useRouter();
  // end session on logout
  const logout = () => {
    session.end();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2E2E" }}>
      <Stack.Screen
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
        }}
      />
      <Box flex={1} alignItems="center" justifyContent="space-around" m={4}>
        <VStack space="3xl">
          <Button bg="#EE0C0C" onPress={logout}>
            <ButtonText>Log Out</ButtonText>
          </Button>
          <Button bg="#EE0C0C" onPress={() => router.push("/(app)/settings")}>
            <ButtonText>Settings</ButtonText>
          </Button>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}
