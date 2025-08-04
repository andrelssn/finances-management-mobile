import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Panel() {
    return (
        <View>
            <Text>Panel</Text>

            <Link href={"/profile"}>Go to Profile</Link>
        </View>
    );
}