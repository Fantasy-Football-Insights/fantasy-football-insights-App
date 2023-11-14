import { Box, Text, Button, ButtonText, VStack, Modal, ModalBackdrop, ModalContent, ModalHeader, Heading, ModalBody, ModalCloseButton } from "@gluestack-ui/themed";
import { SafeAreaView, TextComponent } from "react-native";
import { useState } from "react";
import { Redirect, Stack, useRouter } from "expo-router";
import { useAuth } from "../../components/context/AuthContext";

export default function Settings() {
    const { session } = useAuth();
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    const logout = () => {
        session.end();
        router.push("/(auth)/login/");
    }

    const deleteAccount = () => {

    }

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
                            <Button bg="#EE0C0C" onPress={deleteAccount}>
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