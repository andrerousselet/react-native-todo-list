import { TouchableOpacity, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type TaskProps = {
  task: string;
  onRemove: (task: string) => void;
};

export function Task({ task, onRemove }: TaskProps) {
  return (
    <View className="flex flex-row items-center justify-between bg-zinc-800 p-2 rounded-md mb-2">
      <Text className="text-zinc-200">{task}</Text>
      <TouchableOpacity
        className="rounded-md h-8 w-8 flex items-center justify-center"
        onPress={() => onRemove(task)}
      >
        <Ionicons name="trash" size={20} color="#e4e4e7" />
      </TouchableOpacity>
    </View>
  );
}
