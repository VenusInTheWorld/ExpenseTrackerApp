import { ThemedText } from "@/components/ThemedText";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText type="title" darkColor="#000">HELLO WORLD!</ThemedText>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}