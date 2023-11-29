import {
  Button,
  ButtonIcon,
  ButtonText,
  ChevronDownIcon,
  HStack,
  Icon,
  Menu,
  MenuItem,
  MenuItemLabel,
  SettingsIcon,
  VStack,
} from "@gluestack-ui/themed";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native";
import { useAuth } from "../../components/context/AuthContext";

type Team = {
  teamName: string;
  leagueId: number;
  id: number;
};

const teams: Team[] = [
  {
    teamName: "Ceedeez nuts",
    leagueId: 1,
    id: 1,
  },
  {
    teamName: "Team 2",
    leagueId: 2,
    id: 2,
  },
  {
    teamName: "Team 3",
    leagueId: 3,
    id: 3,
  },
];

export default function App() {
  const { session } = useAuth();
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2E2E" }}>
      <Stack.Screen
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#444444",
            //dropshadow?
          },
          headerLeft: () => (
            <Button
              variant="link"
              onPress={() => router.push("/(app)/settings")}
            >
              <Icon as={SettingsIcon} size="xl" color="#EE0c0c"></Icon>
            </Button>
          ),
          headerTintColor: "#EE0C0C",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />

      <VStack
        space="xl"
        flex={1}
        alignItems="center"
        justifyContent="center"
        m={4}
        backgroundColor="#2f2e2e"
      >
        <Menu
          placement="bottom"
          closeOnSelect
          trigger={({ ...triggerProps }) => {
            return (
              <Button {...triggerProps} variant="outline" borderColor="#EE0C0C">
                <ButtonText color="white">Select Team </ButtonText>
                <ButtonIcon as={ChevronDownIcon} color="white" />
              </Button>
            );
          }}
        >
          {teams.map((team, index) => (
            <MenuItem
              key={team.teamName}
              textValue={team.teamName}
              onPress={() =>
                router.push({
                  pathname: "/(app)/rosters/[id]",
                  params: { id: team.id },
                })
              }
            >
              <MenuItemLabel size="sm">{team.teamName}</MenuItemLabel>
            </MenuItem>
          ))}
        </Menu>
        <Button size="xl" backgroundColor="#999999">
          <ButtonText>Add Team</ButtonText>
        </Button>
        <HStack space="lg">
          <Button backgroundColor="#999999"
            onPress={() => router.push("/(app)/trades/")}>
            <ButtonText>Trade</ButtonText>
          </Button>
          <Button backgroundColor="#999999">
            <ButtonText>Draft</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </SafeAreaView>
  );
}
