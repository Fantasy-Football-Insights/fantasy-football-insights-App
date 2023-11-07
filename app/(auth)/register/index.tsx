import {
  Box,
  Button,
  ButtonText,
  FormControl,
  Heading,
  Image,
  Input,
  InputField,
  VStack,
} from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import { useState } from "react";

export default function Register() {
  const [borderColor, setBorderColor] = useState("white");
  return (
    <Box flex={1} bg="#2F2E2E">
      <Stack.Screen
        options={{
          title: "Register",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#2F2E2E" },
          headerTintColor: "#EE0C0C",
        }}
      />
      <Box flex={1} alignItems="center" justifyContent="space-around" m={8}>
        <VStack space="3xl">
          <VStack alignItems="center" space="xl">
            <Image
              resizeMode="contain"
              width={150}
              height={150}
              source={require("../../../assets/images/logo.png")}
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
          <FormControl>
            <Input bg="#414040" borderColor="#2F2E2E">
              <InputField
                color="white"
                type="password"
                placeholder="Confirm Password"
              />
            </Input>
          </FormControl>
        </VStack>
        <Button bgColor="#EE0C0C" px="$16">
          <ButtonText>Register</ButtonText>
        </Button>
      </Box>
    </Box>
  );
}
