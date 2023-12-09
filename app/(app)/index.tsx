import {
  Box,
  Button,
  ButtonText,
  ChevronDownIcon,
  HStack,
  Icon,
  Image,
  SearchIcon,
  SettingsIcon,
  VStack,
} from "@gluestack-ui/themed";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

type Team = {
  value: string;
  key: number;
};

const teams: Team[] = [
  {
    value: "Ceedeez nuts",
    key: 1,
  },
  {
    value: "Team 2",
    key: 2,
  },
  {
    value: "Team 3",
    key: 3,
  },
];

export default function App() {
  const router = useRouter();

  const [selected, setSelected] = useState("");

  var styles = StyleSheet.create({
    image: {
      width: 400,
      height: 400,
      position: "relative",
    },
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2E2E" }}>
      <Stack.Screen
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#2F2E2E",
          },
          headerRight: () => (
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
        space="3xl"
        flex={1}
        alignItems="center"
        justifyContent="center"
        m={4}
        backgroundColor="#2f2e2e"
      >
        <SelectList
          onSelect={() => router.push(`/(app)/rosters/${selected}`)}
          setSelected={setSelected}
          data={teams}
          maxHeight={150}
          arrowicon={<ChevronDownIcon size={"sm"} color={"white"} />}
          searchicon={<SearchIcon size={"sm"} color={"white"} />}
          search={false}
          boxStyles={{
            borderColor: "#EE0C0C",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          dropdownStyles={{ borderColor: "#EE0C0C" }}
          dropdownTextStyles={{ color: "white" }}
          inputStyles={{ color: "white" }}
          placeholder="Select Team"
        />
        <HStack alignContent="center" space="2xl">
          <Button
            backgroundColor="#999999"
            onPress={() => router.push("/(app)/trades")}
          >
            <ButtonText> Trade </ButtonText>
          </Button>
          <Button
            backgroundColor="#999999"
            onPress={() => router.push("/(app)/addTeam")}
          >
            <ButtonText>Add Team</ButtonText>
          </Button>
        </HStack>
      </VStack>
      <Box alignItems="center">
        <Image
          style={styles.image}
          source={require("../(settings)/Jamarr.png")}
        />
      </Box>
    </SafeAreaView>
  );
}
