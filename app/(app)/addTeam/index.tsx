import {
  Box,
  Button,
  ButtonSpinner,
  ButtonText,
  CircleIcon,
  FormControl,
  HStack,
  Heading,
  Input,
  InputField,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useAsync } from "@react-hookz/web";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import { CreateRosterRequest, createRoster } from "../../api/roster";

type FormData = {
  teamName: string;
  numberOfTeams: string;
  draftPosition: string;
  posPreference: string;
};

export default function index() {
  const [createTeamState, createTeamActions] = useAsync(createRoster);
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      posPreference: "RB",
    },
  });

  const onSubmit = (data: FormData) => {
    const formData: CreateRosterRequest = {
      teamName: data.teamName,
      leagueSize: Number(data.numberOfTeams),
      draftPosition: Number(data.draftPosition),
      pickPreference: data.posPreference,
    };
    createTeamActions.execute(formData);
  };

  useEffect(() => {
    if (createTeamState.status === "success" && createTeamState.result) {
      router.replace({
        pathname: `/(app)/rosters/${createTeamState.result.id}`,
        params: {
          teamName: createTeamState.result.teamName,
        },
      });
    }
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2E2E" }}>
        <Stack.Screen
          options={{
            title: "Add Team",
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
        <Box flex={1} alignItems="center" justifyContent="center" m={8}>
          <VStack w="70%" m="$16" space="3xl">
            {/*Team Name Input*/}
            <FormControl isRequired isInvalid={!!errors.teamName}>
              <FormControl.Label>
                <Heading color="lightgray" fontSize="$md">
                  Team Name
                </Heading>
              </FormControl.Label>
              <Controller
                control={control}
                name={"teamName"}
                rules={{
                  required: "Team Name is required",
                }}
                render={({ field: { onChange, value, onBlur } }) => (
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
                      placeholder="Team Name"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                    ></InputField>
                  </Input>
                )}
              />
              <FormControl.Error>
                <Text color="red">{errors.teamName?.message}</Text>
              </FormControl.Error>
            </FormControl>
            {/*Number of Teams Input*/}
            <FormControl isRequired isInvalid={!!errors.numberOfTeams}>
              <FormControl.Label>
                <Heading color="lightgray" fontSize="$md">
                  Number of Teams in League
                </Heading>
              </FormControl.Label>
              <Controller
                control={control}
                name={"numberOfTeams"}
                rules={{
                  required: "Number of Teams is required",
                }}
                render={({ field: { onChange, value, onBlur } }) => (
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
                      keyboardType={"number-pad"}
                      placeholder="Number of Teams"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                    ></InputField>
                  </Input>
                )}
              />
              <FormControl.Error>
                <Text color="red">{errors.numberOfTeams?.message}</Text>
              </FormControl.Error>
            </FormControl>
            {/*Draft Position Input*/}
            <FormControl isRequired isInvalid={!!errors.draftPosition}>
              <FormControl.Label>
                <Heading color="lightgray" fontSize="$md">
                  Draft Position
                </Heading>
              </FormControl.Label>
              <Controller
                control={control}
                name={"draftPosition"}
                rules={{
                  required: "Draft Position is required",
                }}
                render={({ field: { onChange, value, onBlur } }) => (
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
                      keyboardType={"number-pad"}
                      placeholder="Draft Position"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                    ></InputField>
                  </Input>
                )}
              />
              <FormControl.Error>
                <Text color="red">{errors.draftPosition?.message}</Text>
              </FormControl.Error>
            </FormControl>
            {/*Position Preference Input*/}
            <FormControl isRequired isInvalid={!!errors.posPreference}>
              <FormControl.Label>
                <Heading color="lightgray" fontSize="$md">
                  First Pick Preference
                </Heading>
              </FormControl.Label>
              <Controller
                control={control}
                name={"posPreference"}
                rules={{
                  required: "First pick preference is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup value={value} onChange={onChange}>
                    <HStack alignItems="center" justifyContent="space-between">
                      <Radio
                        value="RB"
                        size="md"
                        isInvalid={false}
                        isDisabled={false}
                      >
                        <RadioIndicator
                          sx={{
                            ":checked": {
                              borderColor: "red",
                            },
                          }}
                          mr="$2"
                        >
                          <RadioIcon
                            sx={{
                              ":checked": {
                                color: "red",
                              },
                            }}
                            as={CircleIcon}
                          />
                        </RadioIndicator>
                        <RadioLabel color="white">RB</RadioLabel>
                      </Radio>
                      <Radio
                        value="WR"
                        size="md"
                        isInvalid={false}
                        isDisabled={false}
                      >
                        <RadioIndicator
                          mr="$2"
                          sx={{
                            ":checked": {
                              borderColor: "red",
                            },
                          }}
                        >
                          <RadioIcon
                            as={CircleIcon}
                            sx={{
                              ":checked": {
                                color: "red",
                              },
                            }}
                          />
                        </RadioIndicator>
                        <RadioLabel color="white">WR</RadioLabel>
                      </Radio>
                      <Radio
                        value="TE"
                        size="md"
                        isInvalid={false}
                        isDisabled={false}
                      >
                        <RadioIndicator
                          mr="$2"
                          sx={{
                            ":checked": {
                              borderColor: "red",
                            },
                          }}
                        >
                          <RadioIcon
                            as={CircleIcon}
                            sx={{
                              ":checked": {
                                color: "red",
                              },
                            }}
                          />
                        </RadioIndicator>
                        <RadioLabel color="white">TE</RadioLabel>
                      </Radio>
                      <Radio
                        value="QB"
                        size="md"
                        isInvalid={false}
                        isDisabled={false}
                      >
                        <RadioIndicator
                          mr="$2"
                          sx={{
                            ":checked": {
                              borderColor: "red",
                            },
                          }}
                        >
                          <RadioIcon
                            as={CircleIcon}
                            sx={{
                              ":checked": {
                                color: "red",
                              },
                            }}
                          />
                        </RadioIndicator>
                        <RadioLabel color="white">QB</RadioLabel>
                      </Radio>
                    </HStack>
                  </RadioGroup>
                )}
              />
              <FormControl.Error>
                <Text color="red">{errors.posPreference?.message}</Text>
              </FormControl.Error>
            </FormControl>
          </VStack>
          <Box>
            {/*Add Team Button*/}
            <Button bg="#EE0C0C" px="$16" onPress={handleSubmit(onSubmit)}>
              <ButtonText mr={"$2"}>
                {createTeamState.status === "loading"
                  ? "Adding Team"
                  : "Add Team"}
              </ButtonText>
              {createTeamState.status === "loading" && <ButtonSpinner />}
            </Button>
          </Box>
          <VStack w="80%" m="$8" space="3xl"></VStack>
        </Box>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
