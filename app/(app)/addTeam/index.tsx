import {
    Box,
    Button,
    ButtonText,
    FormControl,
    Input,
    InputField,
    VStack,
} from "@gluestack-ui/themed";
import { SafeAreaView, TouchableWithoutFeedback } from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";

export default function index() {

    const [teamName, setTeamName] = useState("");
    const [id, setID] = useState("");


    return (
        <TouchableWithoutFeedback>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2E2E" }}>
                <Stack.Screen
                    options={{
                        title: "Add Team",
                        headerStyle: {
                            backgroundColor: "#2F2E2E",
                        },

                        headerTintColor: "#EE0C0C",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                        headerTitleAlign: "center",
                    }}
                />
                <Box flex={1} alignItems="center" justifyContent="center" m={8}>
                    <VStack w="70%" m="$16" space="3xl">
                        {/*Team Name Input*/}
                        <FormControl isRequired>
                            <Input
                                bg="#414040"
                                borderColor="#414040"
                                sx={{
                                    ":focus": {
                                        borderColor: "white",
                                    },
                                }}>
                                <InputField
                                    color="white"
                                    type="text"
                                    placeholder="Team Name"
                                    value={teamName}
                                    onChangeText={setTeamName}>
                                </InputField>
                            </Input>
                        </FormControl>
                        {/*League ID Input*/}
                        <FormControl isRequired>
                            <Input
                                bg="#414040"
                                borderColor="#414040"
                                sx={{
                                    ":focus": {
                                        borderColor: "white",
                                    },
                                }}>
                                <InputField
                                    color="white"
                                    type="text"
                                    placeholder="League ID"
                                    value={id}
                                    onChangeText={setID}>
                                </InputField>
                            </Input>
                        </FormControl>
                    </VStack>
                    <Box>
                        {/*Add Team Button*/}
                        <Button bg="#EE0C0C" px="$16" /*onPress={() => Add Action}*/>
                            <ButtonText>Add Team</ButtonText>
                        </Button>
                    </Box>
                    <VStack w="80%" m="$8" space="3xl" >

                    </VStack>
                </Box >
            </SafeAreaView >
        </TouchableWithoutFeedback>
    );
}