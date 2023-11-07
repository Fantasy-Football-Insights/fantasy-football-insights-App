import {
  Box,
  Button,
  ButtonText,
  FormControl,
  HStack,
  Heading,
  Input,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import { useCallback } from "react";

export default function Login() {
  const [borderColor, setBorderColor] = useState("#414040");
  const onInputFocus = useCallback(() => {
    setBorderColor("#EE0C0C");
  }, []);

  const onInputBlur = useCallback(() => {
    setBorderColor("#414040");
  }, []);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Box flex={1} bg="#2F2E2E">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <Box flex={1} alignItems="center" justifyContent="center" m={8}>
          <VStack w="60%" m="$16" space="3xl">
            <Box>
              <Heading color="#EE0C0C">Welcome</Heading>
              <Text color="#EE0C0C">Sign in to continue!</Text>
            </Box>
            <FormControl>
              <Input
                bg="#414040"
                borderColor="#414040"
                sx={{
                  ":focus": {
                    borderColor: "#EE0C0C",
                  },
                }}
              >
                <InputField color="white" type="text" placeholder="Email" />
              </Input>
            </FormControl>
            <FormControl>
              <Input
                bg="#414040"
                borderColor="#414040"
                sx={{
                  ":focus": {
                    borderColor: "#EE0C0C",
                  },
                }}
              >
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
          <Box>
            <Button bgColor="#EE0C0C" px="$16">
              <ButtonText>Log In</ButtonText>
            </Button>
          </Box>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
}
