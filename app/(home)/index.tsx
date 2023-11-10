import { Box, Button, ButtonText, VStack } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native";
import { useAuth } from "../../components/context/AuthContext";

export default function Home() {
  const { session } = useAuth();

  // end session on logout
  const logout = () => {
    session.end();
  };

  const settings = () => {
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2E2E" }}>
      <Box flex={1} alignItems="center" justifyContent="space-around" m={4}>
        <VStack space="3xl">
          <Button bg="#EE0C0C" onPress={logout}>
            <ButtonText>Log Out</ButtonText>
          </Button>
          <Button onPress={settings}>
            <ButtonText>Settings</ButtonText>
          </Button>
        </VStack>
      </Box>
    </SafeAreaView >
  );
}
