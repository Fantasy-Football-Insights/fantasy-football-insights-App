import { Stack } from "expo-router";

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
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
                }} />
        </Stack>
    )
}

export default StackLayout