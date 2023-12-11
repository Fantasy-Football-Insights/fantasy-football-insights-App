import {
  Box,
  Divider,
  HStack,
  Heading,
  ScrollView,
  Spinner,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useAsync, useMountEffect } from "@react-hookz/web";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Player, RosterModel, getSingleRoster } from "../../api/roster";

export default function Roster() {
  const insets = useSafeAreaInsets();
  const { id, teamName } = useLocalSearchParams() as {
    id: string;
    teamName: string;
  };

  const [roster, setRoster] = useState<RosterModel>();

  const [getRosterState, getRosterActions] = useAsync(getSingleRoster);

  useMountEffect(() => {
    getRosterActions.execute(id);
  });

  useEffect(() => {
    if (getRosterState.status === "success" && getRosterState.result) {
      setRoster(getRosterState.result);
    }
  });

  return (
    <Box flex={1} bg="#2F2E2E">
      <Stack.Screen
        options={{
          title: teamName,
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
      {roster && (
        <ScrollView flex={1} bg="#2F2E2E">
          <Box flex={1} mb={insets.bottom}>
            <Box bg="#EE0C0C" borderRadius={"$lg"} p={"$5"} mb={"$4"} m={"$2"}>
              <VStack space="xl">
                <Heading color="white">{roster.teamName}</Heading>
                <HStack justifyContent="space-between">
                  <Text color="white">League Size: {roster.leagueSize}</Text>
                  <Text color="white">
                    Draft Postition: {roster.draftPosition}
                  </Text>
                </HStack>
              </VStack>
            </Box>
            <Heading color="white" m={"$4"}>
              Draft Picks
            </Heading>
            <Box m={"$2"} bgColor="#181818" borderRadius={"$md"} py={"$1"}>
              <FlatList
                scrollEnabled={false}
                data={roster.players as Player[]}
                keyExtractor={(item: Player, index: number) =>
                  `${index}_${item.name}`
                }
                renderItem={({
                  item,
                  index,
                }: {
                  item: Player;
                  index: number;
                }) => {
                  const { name, team, mainPos, sznAvgProj } = item;
                  return (
                    <Box px={"$2"} py={"$1"}>
                      <HStack space="sm">
                        <Box
                          alignItems="center"
                          justifyContent="center"
                          w={"$8"}
                        >
                          <Heading size="md" color="white">
                            {index + 1}
                          </Heading>
                        </Box>

                        <VStack space="xs" flex={1}>
                          <Heading size="md" color="#EE0C0C">
                            {name}
                          </Heading>
                          <HStack space="xs">
                            <Text size="xs" color="white">
                              {team}
                            </Text>
                            <Text size="xs" color="lightgray">
                              {mainPos}
                            </Text>
                          </HStack>
                        </VStack>
                        <VStack space="xs" flex={1}>
                          <Heading size="sm" color="white">
                            Avg Points
                          </Heading>
                          <Text size="xs" color="white">
                            {sznAvgProj}
                          </Text>
                        </VStack>
                      </HStack>
                      {index !== roster.players.length - 1 && (
                        <Divider bgColor="#333333" mt={"$1"} />
                      )}
                    </Box>
                  );
                }}
              />
            </Box>
            <Heading color="white" alignSelf="flex-end" m={"$4"}>
              Total Projected:{" "}
              {roster.players
                .reduce((total, player) => total + player.sznAvgProj, 0)
                .toFixed(2)}
            </Heading>
          </Box>
        </ScrollView>
      )}
      {getRosterState.status === "loading" && (
        <Box
          flex={1}
          alignItems="center"
          justifyContent="center"
          mb={insets.bottom}
        >
          <Spinner color={"#EE0C0C"} size={"large"} />
        </Box>
      )}
    </Box>
  );
}
