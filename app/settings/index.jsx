import { Box, Button, ButtonText, VStack } from "@gluestack-ui/themed";

export default function Settings() {

    const logout = () => {
        session.end();
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