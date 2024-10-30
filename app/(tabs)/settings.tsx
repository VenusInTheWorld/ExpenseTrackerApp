import { View, Text } from "react-native";
import { ThemedText } from "@/components/common/ThemedText";

export default function Tab() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText type="title" darkColor="#000">
        This is settings page.
      </ThemedText>
      <Text>{'\n'}</Text>
      <Text>I'm a beautiful text.</Text>
    </View>
  );
}
