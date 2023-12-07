import {
    Button,
    ButtonText,
    ChevronDownIcon,
    HStack,
    SearchIcon,
    VStack,
    Box,
    Image
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Header from "../../components/context/layout/Header"

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
            position: "relative"
        }
    })

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2E2E" }}>
            <Header />
            < VStack
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
                        onPress={() => router.push("/(app)/trades/")}
                    >
                        <ButtonText>   Trade   </ButtonText>
                    </Button>
                    <Button
                        backgroundColor="#999999"
                        onPress={() => router.push("/(app)/addTeam/")}>
                        <ButtonText>Add Team</ButtonText>
                    </Button>
                </HStack>
            </VStack >
            <Box alignItems="center">
                <Image
                    style={styles.image}
                    source={require("../(settings)/Jamarr.png")} />
            </Box>
        </SafeAreaView >
    );
}
