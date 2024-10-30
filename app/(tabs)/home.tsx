import { Text, View } from "react-native";
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
        Zohreh is the BEST!
      </ThemedText>
      <Text>{'\n'}</Text>
      <Text>You know?!</Text>
    </View>
  );
}

// type HomeProps = {
//     name: string;
// }

// function Home() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>ZOHREH is the best</Text>

//     </View>
//   );
// }

// export default Home;
