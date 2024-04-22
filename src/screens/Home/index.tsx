import { Task } from "@/components/Task";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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

  function handleRemoveTask(task: string) {
    setTasks((prevTasks) => prevTasks.filter((prevTask) => prevTask !== task));
  }

  return (
    <View className="flex-1 items-center justify-center w-full">
      <View className="-top-6 flex-row items-center justify-center gap-x-2">
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
          <Ionicons name="add-circle-outline" size={24} color="#e4e4e7" />
        </TouchableOpacity>
      </View>
      <View className="flex-1 items-center justify-center w-full">
        <FlatList
          className="w-full"
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item: task }) => (
            <Task key={task} task={task} onRemove={handleRemoveTask} />
          )}
          ListEmptyComponent={() => (
            <View className="flex items-center justify-center">
              <FontAwesome5 name="clipboard-list" size={64} color="#27272a" />
              <Text className="text-zinc-400 mt-4">
                Você ainda não tem tarefas cadastradas.
              </Text>
              <Text className="text-zinc-500">
                Crie tarefas e organize seu dia!
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
