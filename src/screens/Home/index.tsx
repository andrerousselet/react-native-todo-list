import { Text, TextInput, TouchableOpacity, View } from "react-native";

export function Home() {
  return (
    <View className="relative flex-1 items-center justify-center">
      <View className="absolute -top-6 flex-row items-center justify-center px-2">
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#a1a1aa"
          className="text-zinc-200 p-4 rounded-md bg-zinc-800 top-0 flex-1 h-12 mr-2"
        />
        <TouchableOpacity className="rounded-md bg-sky-800 h-12 w-12 items-center justify-center">
          <Text className="text-zinc-200 text-lg">+</Text>
        </TouchableOpacity>
      </View>
      <Text className="text-zinc-100 text-lg">Hello world!!</Text>
    </View>
  );
}
