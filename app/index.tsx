import {
  Box,
  Button,
  ButtonText,
  Heading,
  Image,
  VStack,
} from "@gluestack-ui/themed";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native";

export default function index() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2E2E" }}>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <Box flex={1} alignItems="center" justifyContent="space-around" m={4}>
        <VStack space="3xl">
          <VStack alignItems="center" space="xl">
            <Image
              resizeMode="contain"
              width={150}
              height={150}
              source={require("../assets/images/logo.png")}
              alt="image"
            />
            <Heading fontSize="$2xl" color="#EE0C0C" textAlign="center">
              Fantasy Football Insights
            </Heading>
          </VStack>
          <Heading fontSize="$2xl" color="#EE0C0C" textAlign="center">
            Your home for the best fantasy football assistance
          </Heading>
        </VStack>
        <VStack space="lg">
          <Button
            bgColor="#EE0C0C"
            px="$16"
            onPress={() => router.push("/(auth)/login/")}
          >
            <ButtonText>Log in</ButtonText>
          </Button>
          <Button
            bgColor="#EE0C0C"
            px="$16"
            onPress={() => router.push("/(auth)/register/")}
          >
            <ButtonText>Register</ButtonText>
          </Button>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}
