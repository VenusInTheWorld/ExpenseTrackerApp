import { Stack } from "expo-router";
import { Image, StyleSheet } from "react-native";


export default function RootLayout() {
  return (
    <Stack
    initialRouteName="home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#086BF7",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="+not-found" /> */}
    </Stack>
  );
}