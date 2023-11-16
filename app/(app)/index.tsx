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
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
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
            backgroundColor: "#D9D9D9",
          },
          headerLeft: () => <Button><Icon as={SettingsIcon} size="xl"></Icon></Button>,
          headerTintColor: "#EE0C0C",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }} />

      <Box alignItems="center" justifyContent="space-around" m={4} backgroundColor="white">
        <VStack >
          <Select>
            <SelectTrigger variant="outline" size="xl">
              <SelectInput placeholder="Select Team" />
              <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
              </SelectContent>
            </SelectPortal>

          </Select>

          <Button bg="#EE0C0C" onPress={logout}>
            <ButtonText>Log Out</ButtonText>
          </Button>
          <Button bg="#EE0C0C" onPress={() => router.push("/(app)/settings")}>
            <ButtonText>Settings</ButtonText>
          </Button>
        </VStack>
      </Box>
    </SafeAreaView >
  );
}
