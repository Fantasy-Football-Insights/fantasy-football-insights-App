import { Box, Button, ButtonText, VStack } from "@gluestack-ui/themed";
import { Redirect, Stack, useRouter } from "expo-router";
import { useAuth } from "../../components/context/AuthContext";

export default function Settings() {
    const { session } = useAuth();
    const router = useRouter();

    const logout = () => {
        session.end();
        router.push("/(auth)/login/");
    }

    const deleteAccount = () => {

    }

    return (
        < VStack >
            <Button onPress={logout}>
                <ButtonText>Logout</ButtonText>
            </Button>
            <Button onPress={deleteAccount}>
                <ButtonText>Delete Account</ButtonText>
            </Button>
        </VStack >
    )
}