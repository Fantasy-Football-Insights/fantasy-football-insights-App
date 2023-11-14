import { Box, Text, Button, ButtonText, VStack, Modal, ModalBackdrop, ModalContent, ModalHeader, Heading, ModalBody } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native";
import { useState } from "react";
import { Redirect, Stack, useRouter } from "expo-router";
import { useAuth } from "../../components/context/AuthContext";
import { UserModel } from "../api/users";
import { API_URL } from "../../config/baseurl";
import axios from "axios";

export default function Settings() {

    const { session } = useAuth();
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    //Logs user out and ends session
    const logout = () => {
        session.end();
        router.push("/(auth)/login/");
    }

    //Deletes the users account and ends session
    const deleteUser = async () => {
        const result = await axios.delete<UserModel>(`${API_URL}/users/delete`);
        session.end();
        router.push("/(auth)/login/");
        return result.data;
    };




    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2E2E" }}>
            <Box flex={1} alignItems="center" justifyContent="space-around" m={4}>
                <VStack space="3xl">
                    <Button bg="#EE0C0C" onPress={logout}>
                        <ButtonText>Log Out</ButtonText>
                    </Button>
                    <Button bg="#EE0C0C" onPress={() => { setShowModal(true) }}>
                        <ButtonText>Delete Account</ButtonText>
                    </Button>
                </VStack>

                < Modal
                    isOpen={showModal}
                    onClose={() => { setShowModal(false) }
                    }>
                    <ModalBackdrop />
                    <ModalContent alignItems="center" >
                        <ModalHeader borderBottomWidth={"$0"}>
                            <VStack space="sm"  >
                                <Heading size="lg" textAlign="center">Are you sure?</Heading>
                                <Text size="sm">This cannot be reversed. </Text>
                            </VStack>
                        </ModalHeader>
                        <ModalBody>
                            <Button bg="#EE0C0C" onPress={deleteUser}>
                                <ButtonText>Delete</ButtonText>
                            </Button>
                            <Button bg="$coolGray500" onPress={() => { setShowModal(false) }}>
                                <ButtonText>Cancel</ButtonText>
                            </Button>
                        </ModalBody>
                    </ModalContent>
                </Modal >
            </Box >
        </SafeAreaView >

    )
}