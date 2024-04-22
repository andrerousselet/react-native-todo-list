import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    if (!newTask) {
      return Alert.alert("Add a new task!");
    }
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTask("");
  }

  return (
    <View className="flex-1 items-center justify-center">
      <View className="-top-6 flex-row items-center justify-center px-4 gap-x-2">
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#a1a1aa"
          className="text-zinc-200 p-4 rounded-md bg-zinc-800 top-0 flex-1 h-12"
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity
          className="relative rounded-md bg-sky-700 h-12 w-12 flex items-center justify-center"
          onPress={handleAddTask}
        >
          <View className="bg-sky-600 rounded-full w-5 h-5 border border-zinc-200 flex items-center justify-center">
            <Text className="text-zinc-200 text-center">+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-1 items-center justify-center">
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text>{item}</Text>}
          ListEmptyComponent={() => (
            <>
              <Text className="text-zinc-400">
                Você ainda não tem tarefas cadastradas.
              </Text>
              <Text className="text-zinc-500">
                Crie tarefas e organize seus itens a fazer.
              </Text>
            </>
          )}
        />
      </View>
    </View>
  );
}
