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
        User Profile 
      </ThemedText>
      <Text>{'\n'}</Text>
      <Text>I'm not an ordinary text though I might look like one!</Text>
    </View>
  );
}
