import {
  Button,
  ButtonText,
  ChevronDownIcon,
  HStack,
  Icon,
  SearchIcon,
  SettingsIcon,
  VStack,
} from "@gluestack-ui/themed";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useAuth } from "../../components/context/AuthContext";

type Team = {
  value: string;
  key: number;
};

const teams: Team[] = [
  {
    key: 1,
    value: "Ceedeez nuts",
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

var styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    alignSelf: "center"
  },

  button: {
    alignSelf: "flex-end"
  }
})

export default function App() {
  const { session } = useAuth();
  const router = useRouter();

  const [selected, setSelected] = useState("");

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
            <HStack space="3xl">
              <Button
                style={styles.button}
                variant="link"
                onPress={() => router.push("/(app)/settings")}
              >
                <Icon as={SettingsIcon} size="xl" color="#EE0c0c"></Icon>
              </Button>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={require("../../assets/images/logo.png")}
                alt="image" />
            </HStack>
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
        <Button size="xl" backgroundColor="#999999">
          <ButtonText>Add Team</ButtonText>
        </Button>
        <HStack space="lg">
          <Button
            backgroundColor="#999999"
            onPress={() => router.push("/(app)/trades/")}
          >
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
