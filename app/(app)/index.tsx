import {
  Box,
  Button,
  ButtonText,
  VStack,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  ChevronDownIcon,
  Icon,
  Menu,
  MenuItem,
  MenuItemLabel,
  AddIcon,
  HStack,
  SettingsIcon
} from "@gluestack-ui/themed";
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
            backgroundColor: "#444444",
            //dropshadow?
          },
          headerLeft: () => <Button variant="link" onPress={() => router.push("/(app)/settings")}><Icon as={SettingsIcon} size="xl" color="#EE0c0c"></Icon></Button>,
          headerTintColor: "#EE0C0C",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }} />

      <Box alignItems="center" justifyContent="space-around" m={4} backgroundColor="white">

      </Box>
    </SafeAreaView >
  );
}
