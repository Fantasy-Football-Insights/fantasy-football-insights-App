import React, { useState } from "react";
import { Box, Text, Button, ButtonText, Input, InputField, FlatList, VStack, FormControl } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native";
import Header from "../../../components/context/layout/Header";
import { Stack, useRouter } from "expo-router";

export default function index() {
    const [teamName, setTeamName] = useState("");
    const [draftPosition, setDraftPosition] = useState("");
    const [responses, setResponses] = useState<string[]>([]);

    const handleInputChange = () => {
        console.log("Team Name:", teamName);
        console.log("Draft Position:", draftPosition);
        setResponses([...responses, `Team Name: ${teamName}, Draft Position: ${draftPosition}`]);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2E2E" }}>
            <Header />
            <VStack
                flex={1}
                alignItems="center"
                justifyContent="space-around"
                m={4}
                backgroundColor="#2f2e2e"
            >
                <VStack space="sm">
                    <Input variant="rounded" width="50%" isRequired={true}>
                        <InputField
                            placeholder="Enter team name"
                            color="#FFFFFF"
                            value={teamName}
                            onChangeText={setTeamName}
                        />
                    </Input>
                    <Input variant="rounded" width="50%" isRequired={true}>
                        <InputField
                            placeholder="Enter draft position"
                            color="#FFFFFF"
                            value={draftPosition}
                            onChangeText={setDraftPosition}
                        />
                    </Input>
                </VStack>
                <Button onPress={handleInputChange}>
                    <ButtonText>
                        Submit
                    </ButtonText>
                </Button>
                <FlatList
                    data={responses}
                    renderItem={({ item }) => (
                        <Text>{item}</Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </VStack>
        </SafeAreaView>
    );
}