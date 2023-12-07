import {Box, Text, Button, ButtonText, Input, InputField, InputSlot} from "@gluestack-ui/themed"
import { SafeAreaView } from "react-native"
import Header from "../../../components/context/layout/Header"
import { Stack, useRouter } from "expo-router";
export default function index() {
    return (
        <SafeAreaView style={{
            flex:1, backgroundColor: "#2F2E2E"}}>
        <Header/>
        <Box>
            <Input>
                <InputField />
                    <InputSlot>
                    </InputSlot>
            </Input>
        </Box>
        </SafeAreaView>
    );
}