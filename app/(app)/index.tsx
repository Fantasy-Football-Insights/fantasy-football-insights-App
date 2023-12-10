import {
  AddIcon,
  Box,
  Button,
  ChevronRightIcon,
  Divider,
  Fab,
  FabIcon,
  FabLabel,
  HStack,
  Heading,
  Icon,
  SettingsIcon,
  Spinner,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useAsync } from "@react-hookz/web";
import { useIsFocused } from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, RefreshControl, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RosterModel, getRosters } from "../api/roster";

export default function App() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [rosters, setRosters] = useState<RosterModel[]>();
  const [getRostersState, getRostersAction] = useAsync(getRosters);
  const [getRefreshState, getRefreshAction] = useAsync(getRosters);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getRostersAction.execute();
    }
  }, [isFocused]);

  useEffect(() => {
    if (getRostersState.status === "success" && getRostersState.result) {
      setRosters(getRostersState.result);
    }
  }, [getRostersState.status, getRostersState.result]);

  useEffect(() => {
    if (
      getRefreshState.status === "success" &&
      getRefreshState.result &&
      getRefreshState.result !== rosters
    ) {
      setRosters(getRefreshState.result);
    }
  }, [getRefreshState.status, getRefreshState.result]);

  return (
    <Box flex={1} bg="#2F2E2E">
      <Stack.Screen
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#2F2E2E",
          },
          headerRight: () => (
            <Button
              variant="link"
              onPress={() => router.push("/(app)/settings")}
            >
              <Icon as={SettingsIcon} size="xl" color="#EE0c0c"></Icon>
            </Button>
          ),
          headerTintColor: "#EE0C0C",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
      {rosters && rosters.length > 0 && (
        <FlatList
          data={rosters}
          keyExtractor={(roster: RosterModel) => roster.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={getRefreshState.status === "loading"}
              onRefresh={getRefreshAction.execute}
            />
          }
          renderItem={({ item: roster }) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: `/(app)/rosters/[id]`,
                  params: { id: roster.id, teamName: roster.teamName },
                })
              }
            >
              <VStack space="md" mx={"$4"} ml={"$8"} mb={"$8"}>
                <HStack
                  justifyContent="space-between"
                  alignItems="center"
                  mt={"$4"}
                >
                  <Heading color="white">{roster.teamName}</Heading>
                  <ChevronRightIcon color="#EE0C0C" size="lg" />
                </HStack>
                <HStack justifyContent="space-between">
                  <Text color="lightgray">
                    League Size: {roster.leagueSize}
                  </Text>
                  <Text color="lightgray">
                    Draft Pos: {roster.draftPosition}
                  </Text>
                </HStack>
              </VStack>
              <Divider ml={"$8"} />
            </TouchableOpacity>
          )}
        />
      )}

      {getRostersState.status === "loading" && !rosters && (
        <Box
          flex={1}
          alignItems="center"
          justifyContent="center"
          mb={insets.bottom}
        >
          <Spinner color={"#EE0C0C"} size={"large"} />
        </Box>
      )}
      {rosters && rosters.length < 1 && (
        <Box
          flex={1}
          alignItems="center"
          justifyContent="center"
          mb={insets.bottom}
        >
          <Text color={"white"}>You have not created any teams yet.</Text>
        </Box>
      )}
      <Fab
        bg="#EE0C0C"
        size="md"
        placement={"bottom left"}
        mb={insets.bottom}
        onPress={() => router.push("/(app)/trades")}
      >
        <FabIcon as={AddIcon} mr={"$1"} />
        <FabLabel>Trade</FabLabel>
      </Fab>
      <Fab
        bg="#EE0C0C"
        size="md"
        placement={"bottom right"}
        mb={insets.bottom}
        onPress={() => router.push("/(app)/addTeam")}
      >
        <FabIcon as={AddIcon} mr={"$1"} />
        <FabLabel>Add Team</FabLabel>
      </Fab>
    </Box>
  );
}
