import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Header() {
  return (
    <View className="flex-row items-center justify-center w-screen h-1/5 bg-zinc-950">
      <Text className="text-sky-400 text-3xl font-light">TO</Text>
      <Text className="text-sky-700 text-3xl font-light">DO</Text>
      <Ionicons name="checkmark-done" size={32} color="#38bdf8" />
    </View>
  );
}
