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
            backgroundColor: "#D9D9D9",
          },
          headerRight: () => (<Button variant="link" onPress={() => router.push("/(app)/settings")}><Icon as={SettingsIcon} size="xl" /></Button>),
          headerTintColor: "#EE0C0C",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }} />

      <Box alignItems="center" justifyContent="space-around" m={4} backgroundColor="#2f2e2e">
        
      <Menu
  placement="top"
  trigger={({ ...triggerProps }) => {
    return (
      <Button {...triggerProps} backgroundColor = "#999999" width={"80%"}>
        <ButtonText>Select League</ButtonText>
      </Button>
    )
  }}
>
  <MenuItem key="Community" textValue="Community">
    <MenuItemLabel size="sm">League</MenuItemLabel>
  </MenuItem>
  <MenuItem key="Plugins" textValue="Plugins">
    {/* PuzzleIcon is imported from 'lucide-react-native' */}
    <MenuItemLabel size="sm">League 2</MenuItemLabel>
  </MenuItem>
  <MenuItem key="CurrSelect" textValue="CurrSelect" disabled>
    {/* PaintBucket is imported from 'lucide-react-native' */}
    <MenuItemLabel size="sm" disabled>(Currently Selected) League 3</MenuItemLabel>
  </MenuItem>
  <MenuItem key="Add team" textValue="Add team">
    <Icon as={AddIcon} size="sm" mr="$2" />
    <MenuItemLabel size="sm">Add team</MenuItemLabel>
  </MenuItem>
</Menu>
<Button backgroundColor = "#999999">
  <ButtonText>Trade</ButtonText>
</Button>

<Button backgroundColor = "#999999">
  <ButtonText>Draft</ButtonText>
</Button>
      </Box>
    </SafeAreaView >
  );
}
