import { View, Text } from "react-native";

type CountersProps = {
  totalTasks: number;
  completedTasks: number;
};

export function Counters({ totalTasks, completedTasks }: CountersProps) {
  return (
    <View className="w-full flex flex-row items-center justify-between mb-6">
      <View className="rounded-full bg-sky-700 px-2 py-1">
        <Text className="text-zinc-100">Total: {totalTasks}</Text>
      </View>
      <View className="rounded-full bg-sky-400 px-2 py-1">
        <Text className="text-zinc-900">Completed: {completedTasks}</Text>
      </View>
    </View>
  );
}
