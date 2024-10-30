import { View, Text } from "react-native";
import { ThemedText } from "@/components/common/ThemedText";

function AccountCreateEdit() {
    return (
        <View style={{
            flex : 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <ThemedText type="title" darkColor="#F20000">This is Settings page.</ThemedText>
            <Text>Setting one</Text>
            <Text>Setting two (just imagine)</Text>
        </View>
    )
}

export default AccountCreateEdit;