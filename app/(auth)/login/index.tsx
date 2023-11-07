import {
  Box,
  Button,
  ButtonText,
  FormControl,
  HStack,
  Input,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Link, Stack } from "expo-router";
import { useState } from "react";

export default function Login() {
  const [borderColor, setBorderColor] = useState("white");
  return (
    <Box flex={1} bg="#2F2E2E">
      <Stack.Screen
        options={{
          title: "Log In",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#2F2E2E" },
          headerTintColor: "#EE0C0C",
        }}
      />
      <Box flex={1} alignItems="center" justifyContent="center" m={8}>
        <VStack w="90%" m="$16" space="3xl">
          <FormControl>
            <Input bg="#414040" borderColor="#2F2E2E">
              <InputField color="white" type="text" placeholder="Email" />
            </Input>
          </FormControl>
          <FormControl>
            <Input bg="#414040" borderColor="#2F2E2E">
              <InputField
                color="white"
                type="password"
                placeholder="Password"
              />
            </Input>
          </FormControl>
          <HStack space="xs">
            <Text color="white">New User?</Text>
            <Link href={"/(auth)/register/"}>
              <Text color="#EE0C0C" underline>
                Register
              </Text>
            </Link>
          </HStack>
        </VStack>
        <Button bgColor="#EE0C0C" px="$16">
          <ButtonText>Log In</ButtonText>
        </Button>
      </Box>
    </Box>
  );
}
