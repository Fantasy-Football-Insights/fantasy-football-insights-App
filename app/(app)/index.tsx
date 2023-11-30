import {
  Button,
  Box,
  ButtonText,
  ChevronDownIcon,
  HStack,
  Icon,
  SearchIcon,
  SettingsIcon,
  VStack,
  Heading,
  MenuIcon
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

var styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    alignSelf: "baseline"
  },
})

export default function App() {
  const { session } = useAuth();
  const router = useRouter();

  const [selected, setSelected] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2E2E" }}>
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#444444",
            //dropshadow?
          },
          headerLeft: () => (
            <HStack space="4xl">
              <Button
                variant="link"
                onPress={() => router.push("/(app)/settings")}
              >
                <Icon as={SettingsIcon} size="xl" color="#EE0c0c" />
              </Button>
              <Box>
                <HStack space="lg">
                  <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={require("../../assets/images/logo.png")}
                    alt="image" />
                  <Heading fontSize="$lg" color="#EE0C0C" textAlign="center">Fantasy Football Insights</Heading>
                </HStack>
              </Box>
              <Button
                variant="link">
                <Icon as={MenuIcon} size="xl" color="#EE0c0c" />
              </Button>
            </HStack>
          ),
          headerTintColor: "#EE0C0C",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />

      < VStack
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
      </VStack >
    </SafeAreaView >
  );
}
