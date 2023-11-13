import {
  Box,
  Button,
  ButtonSpinner,
  ButtonText,
  FormControl,
  HStack,
  Heading,
  Input,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useAsync } from "@react-hookz/web";
import { Link, Stack, useRouter } from "expo-router";
import { useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { useAuth } from "../../../components/context/AuthContext";
import { login } from "../../api/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sessionStatus, setSessionStatus] = useState<"not-started" | "loading">(
    "not-started"
  );

  const router = useRouter();

  // auth context
  const { authenticated, session } = useAuth();

  // wrapper for api calls
  const [loginRequest, loginActions] = useAsync(async () => {
    const response = await login(email, password);
    return response;
  });

  // when api returns login success, set the session in the app for the user
  const onLogin = async (access_token: string) => {
    setSessionStatus("loading");
    session.create(access_token);
  };

  // if login request is successful, call onLogin function passing in the access_token returned by the api
  if (loginRequest.status === "success" && loginRequest.result) {
    const { access_token } = loginRequest.result;
    // usestate to prevent multiple calls
    if (sessionStatus === "not-started") {
      onLogin(access_token);
    }
  }

  // if user is authenticated, go to the home screen
  if (authenticated) {
    router.replace("/(home)/");
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Box flex={1} bg="#2F2E2E">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <Box flex={1} alignItems="center" justifyContent="center" m={8}>
          <VStack w="70%" m="$16" space="3xl">
            <Box>
              <Heading color="#EE0C0C">Welcome</Heading>
              <Text color="#EE0C0C">Sign in to continue!</Text>
            </Box>
            {loginRequest.error && loginRequest.status !== "loading" ? (
              <Text color="red" fontSize="$sm">
                Invalid email or password
              </Text>
            ) : null}
            {/* Email input */}
            <FormControl isRequired>
              <Input
                bg="#414040"
                borderColor="#414040"
                sx={{
                  ":focus": {
                    borderColor: "white",
                  },
                }}
              >
                <InputField
                  color="white"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                />
              </Input>
            </FormControl>
            {/* Password Input */}
            <FormControl isRequired>
              <Input
                bg="#414040"
                borderColor="#414040"
                sx={{
                  ":focus": {
                    borderColor: "white",
                  },
                }}
              >
                <InputField
                  color="white"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
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
            {/* Login Button */}
            <Button
              bgColor="#EE0C0C"
              px="$16"
              onPress={() => loginActions.execute()}
            >
              <ButtonText>Log In</ButtonText>
              {loginRequest.status === "loading" && <ButtonSpinner ml="$2" />}
            </Button>
          </Box>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
}
