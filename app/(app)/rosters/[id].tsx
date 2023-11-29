import { Box, Text } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";

export default function Roster() {
  const local = useLocalSearchParams();
  return (
    <Box>
      <Text>Roster {local.id}</Text>
    </Box>
  );
}
