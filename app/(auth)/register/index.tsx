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
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { register } from "../../api/auth";

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
};

export default function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const [formData, setFormData] = useState<FormData>();
  const [password, setPassword] = useState("");

  const [regiserUserRequest, registerUserActions] = useAsync(async () => {
    if (formData) {
      const response = await register(
        formData.email,
        formData.password,
        formData.firstName,
        formData.lastName
      );
      return response;
    }
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("submit");
    setFormData({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
    });
    console.log(data);
    registerUserActions.execute();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Box flex={1} bg="#2F2E2E">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <Box flex={1} alignItems="center" justifyContent="center" m={8}>
          <VStack w="60%" m="$16" space="sm">
            <Box>
              <Heading color="#EE0C0C">Create Account</Heading>
              <Text color="#EE0C0C">Create a new account</Text>
            </Box>
            <FormControl isRequired isInvalid={!!errors.firstName}>
              <FormControl.Label>
                <Heading color="lightgray" fontSize="$md">
                  First Name
                </Heading>
              </FormControl.Label>
              <Controller
                control={control}
                name="firstName"
                rules={{
                  required: "First Name is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    bg="#414040"
                    borderColor={errors.firstName ? "red" : "#2F2E2E"}
                    sx={{
                      ":focus": {
                        borderColor: "lightgray",
                      },
                    }}
                  >
                    <InputField
                      color="white"
                      type="text"
                      placeholder="First Name"
                      value={value}
                      onChangeText={onChange}
                    />
                  </Input>
                )}
              ></Controller>
              <FormControl.Error>
                <Text color="red">{errors.firstName?.message}</Text>
              </FormControl.Error>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.lastName}>
              <FormControl.Label>
                <Heading color="lightgray" fontSize="$md">
                  Last Name
                </Heading>
              </FormControl.Label>
              <Controller
                control={control}
                name="lastName"
                rules={{
                  required: "First Name is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    bg="#414040"
                    borderColor={errors.lastName ? "red" : "#2F2E2E"}
                    sx={{
                      ":focus": {
                        borderColor: "lightgray",
                      },
                    }}
                  >
                    <InputField
                      color="white"
                      type="text"
                      placeholder="Last Name"
                      value={value}
                      onChangeText={onChange}
                    />
                  </Input>
                )}
              ></Controller>
              <FormControl.Error>
                <Text color="red">{errors.lastName?.message}</Text>
              </FormControl.Error>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.email}>
              <FormControl.Label>
                <Heading color="lightgray" fontSize="$md">
                  Email
                </Heading>
              </FormControl.Label>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    bg="#414040"
                    borderColor={errors.email ? "red" : "#2F2E2E"}
                    sx={{
                      ":focus": {
                        borderColor: "lightgray",
                      },
                    }}
                  >
                    <InputField
                      color="white"
                      type="text"
                      placeholder="Email Address"
                      value={value}
                      onChangeText={onChange}
                    />
                  </Input>
                )}
              ></Controller>
              <FormControl.Error>
                <Text color="red">{errors.email?.message}</Text>
              </FormControl.Error>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.password}>
              <FormControl.Label>
                <Heading color="lightgray" fontSize="$md">
                  Password
                </Heading>
              </FormControl.Label>
              <Controller
                control={control}
                name="password"
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    bg="#414040"
                    borderColor={errors.password ? "red" : "#2F2E2E"}
                    sx={{
                      ":focus": {
                        borderColor: "lightgray",
                      },
                    }}
                  >
                    <InputField
                      color="white"
                      type="password"
                      placeholder="Password"
                      value={value}
                      onChangeText={(value) => {
                        onChange(value);
                        setPassword(value);
                      }}
                    />
                  </Input>
                )}
              ></Controller>
              <FormControl.Error>
                <Text color="red">{errors.password?.message}</Text>
              </FormControl.Error>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.passwordConfirm}>
              <FormControl.Label>
                <Heading color="lightgray" fontSize="$md">
                  Confirm Password
                </Heading>
              </FormControl.Label>
              <Controller
                control={control}
                name="passwordConfirm"
                rules={{
                  required: "Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    bg="#414040"
                    borderColor={errors.passwordConfirm ? "red" : "#2F2E2E"}
                    sx={{
                      ":focus": {
                        borderColor: "lightgray",
                      },
                    }}
                  >
                    <InputField
                      color="white"
                      type="password"
                      placeholder="Confirm Password"
                      value={value}
                      onChangeText={onChange}
                    />
                  </Input>
                )}
              ></Controller>
              <FormControl.Error>
                <Text color="red">{errors.passwordConfirm?.message}</Text>
              </FormControl.Error>
            </FormControl>
            <HStack space="xs">
              <Text color="white">Already have an account?</Text>
              <Link href={"/(auth)/login/"}>
                <Text color="#EE0C0C" underline>
                  log in
                </Text>
              </Link>
            </HStack>
          </VStack>
          <Button
            bgColor="#EE0C0C"
            px="$16"
            onPress={() => handleSubmit(onSubmit)()}
          >
            <ButtonText>Register</ButtonText>
            {regiserUserRequest.status === "loading" && <ButtonSpinner />}
          </Button>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
}
