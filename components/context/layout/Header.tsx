//create exportable header so we can use it for many pages
//TODO: WINSEN
import { Stack, useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { HStack, Button, Icon, SettingsIcon, Image, Heading, Box, MenuIcon } from "@gluestack-ui/themed";
const router = useRouter();

var styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        alignSelf: "baseline"
    },
})

const Header = () => {

    return (
<Stack.Screen
        options={{
            title: "",
            headerStyle: {
            backgroundColor: "#444444",
            //dropshadow?
            },
            headerLeft: () => (
            <HStack space="4xl">
                <Button
                variant="link"
                onPress={() => router.push("/(app)/settings")}
                >
                <Icon as={SettingsIcon} size="xl" color="#EE0c0c" />
                </Button>
                <Box>
                <HStack space="lg">
                    <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={require("../../../assets/images/logo.png")}
                    alt="image" />
                    <Heading fontSize="$lg" color="#EE0C0C" textAlign="center">Fantasy Football Insights</Heading>
                </HStack>
                </Box>
                <Button
                variant="link">
                <Icon as={MenuIcon} size="xl" color="#EE0c0c" />
                </Button>
            </HStack>
            ),
            headerTintColor: "#EE0C0C",
            headerTitleStyle: {
            fontWeight: "bold",
            },
            headerTitleAlign: "center",
        }}
        />
    )
}

export default Header;
