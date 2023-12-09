import {Box, Text, Button, ButtonText, Input, InputField, FlatList, VStack} from "@gluestack-ui/themed"
import { SafeAreaView } from "react-native"
import Header from "../../../components/context/layout/Header"
import { Stack, useRouter } from "expo-router";


export default function index() {



    return (
        <SafeAreaView style={{
            flex:1, backgroundColor: "#2F2E2E"}}>
        <Header/>
        < VStack
                flex={1}
                alignItems="center"
                justifyContent="space-around"
                m={4}
                backgroundColor="#2f2e2e"
            >
                <VStack space="sm">
            <Input variant = "rounded"
            width = "50%">
                <InputField placeholder="Enter team name" color="#FFFFFF"/>
            </Input>
            <Input variant = "rounded"
            width = "50%">
                <InputField placeholder="Enter draft position" color="#FFFFFF"/>
            </Input>
            </VStack>
            <Button onPress={}>
                {
                    /*
                     react hook form to do form control on this
                     make function to submit
                     algorithm will be in the backend
                     create teams service  
                    */

                }
                <ButtonText>
                    Submit
                    </ButtonText>
                </Button>
            </VStack>
      
        </SafeAreaView>
    );
}