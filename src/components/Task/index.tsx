import { TouchableOpacity, View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type TaskProps = {
  id: string;
  task: string;
  isDone: boolean;
  onRemove: () => void;
  onUpdate: () => void;
};

export function Task({
  id,
  task,
  isDone = false,
  onRemove,
  onUpdate,
}: TaskProps) {
  return (
    <View className="flex flex-row items-center justify-between bg-zinc-800 p-2 rounded-md mb-2">
      <View className="flex-row items-center justify-center gap-x-2">
        <TouchableOpacity
          className="h-8 w-8 flex items-center justify-center"
          onPress={onUpdate}
        >
          {isDone ? (
            <FontAwesome name="check-circle" size={24} color="#38bdf8" />
          ) : (
            <FontAwesome name="circle-thin" size={24} color="#0e7490" />
          )}
        </TouchableOpacity>
        <Text
          className={`text-zinc-200 uppercase text-sm ${
            isDone && "line-through text-zinc-400"
          }`}
        >
          {task}
        </Text>
      </View>
      <TouchableOpacity
        className="h-8 w-8 flex items-center justify-center"
        onPress={onRemove}
      >
        <FontAwesome name="trash-o" size={20} color="#e4e4e7" />
      </TouchableOpacity>
    </View>
  );
}
