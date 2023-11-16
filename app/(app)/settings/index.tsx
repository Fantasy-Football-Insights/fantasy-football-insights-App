import {
  Box,
  Text,
  Button,
  ButtonText,
  VStack,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalBody,
  Icon,
  AlertCircleIcon
} from "@gluestack-ui/themed";
import { ActionSheetIOS, StyleSheet, View, Platform, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { useAuth } from "../../../components/context/AuthContext";
import { API_URL } from "../../../config/baseurl";
import axios from "axios";
import { useAsync } from "@react-hookz/web";

export default function Settings() {
  const { session } = useAuth();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  //Allows the user to logout and return to login
  const logout = () => {
    session.end();
    router.push("/(auth)/login/");
  }

  //User deletion process
  const deleteUser = async () => {
    const result = await axios.delete(`${API_URL}/users`);
    return result.data;
  };

  const [deleteRequest, deleteActions] = useAsync(async () => {
    const response = await deleteUser();
    return response;
  }
  )

  if (deleteRequest.status === "success") {
    logout()
  }

  const deleteAccount = () => {
    deleteActions.execute();
  }

  /*Determines which OS the user is using
    and ensures the correct popup appears*/
  const determinePlatform = () => {
    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          title: "Are you sure?",
          message: "This cannot be reversed",
          options: ["Cancel", "Delete"],
          destructiveButtonIndex: 1,
          cancelButtonIndex: 0,
          userInterfaceStyle: "dark",
        },
        buttonIndex => {
          if (buttonIndex === 1) {
            deleteAccount();
          }
        })
    } else {
      setShowModal(true)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2E2E" }}>
      <Stack.Screen
        options={{
          title: "Settings",
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

      {/*Creates buttons for settings screen*/}
      <Box flex={1} alignItems="center" justifyContent="space-around" m={4}>
        <VStack space="3xl">
          <Button bg="#EE0C0C" onPress={logout}>
            <ButtonText>Log Out</ButtonText>
          </Button>
          <Button bg="#EE0C0C" onPress={() => { determinePlatform(); deleteUser(); }}>
            <ButtonText>Delete Account</ButtonText>
          </Button>
        </VStack>

        {/*Creates modal for Android*/}
        < Modal
          isOpen={showModal}
          onClose={() => { setShowModal(false) }
          }>
          <ModalBackdrop />
          <ModalContent alignItems="center">
            <ModalHeader borderBottomWidth={"$0"}>
              <VStack space="xs"  >
                <Icon as={AlertCircleIcon} m="$10" w="$20" h="$20" />
                <Heading size="lg" textAlign="center">Are you sure?</Heading>
                <Text size="sm">This cannot be reversed. </Text>
              </VStack>
            </ModalHeader>
            <ModalBody>
              <VStack space="lg"  >
                <Button bg="#EE0C0C" onPress={deleteAccount}>
                  <ButtonText>Delete</ButtonText>
                </Button>
                <Button bg="$coolGray500" onPress={() => { setShowModal(false) }}>
                  <ButtonText>Cancel</ButtonText>
                </Button>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal >
      </Box >
    </SafeAreaView >

  )
}