import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
export default function index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2E2E" }}>
      <Stack.Screen
        options={{
          title: "Trades",
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
    </SafeAreaView>
  );
}