import {
    Box,
    Button,
    ButtonText,
    FormControl,
    Input,
    InputField,
    HStack,
    VStack,
    Text,
    Image
} from "@gluestack-ui/themed";
import { SafeAreaView, StyleSheet } from "react-native";
import { Link, Stack, router } from "expo-router";
import { useEffect, useState } from "react";

export default function index() {

    var styles = StyleSheet.create({
        image: {
            width: 400,
            height: 300
        }
    })

    const [team, setTeam] = useState("");
    const [id, setID] = useState("");


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2E2E" }}>
            <Stack.Screen
                options={{
                    title: "",
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
                                value={team}
                                onChangeText={setTeam}>
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
                <VStack w="90%" m="$16" space="3xl" >
                    <Box>
                        <Image
                            style={styles.image}
                            source={require("../../(settings)/Jamarr.png")} />
                    </Box>
                </VStack>
            </Box >
        </SafeAreaView >
    );
}