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
import uuid from "react-native-uuid";
import { Counters } from "@/components/Counter";

type Task = {
  id: string;
  task: string;
  isDone: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((tasks) => tasks.isDone).length;

  function handleAddTask() {
    if (!newTask) {
      return Alert.alert("Add a new task!");
    }
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: String(uuid.v4()), task: newTask, isDone: false },
    ]);
    setNewTask("");
  }

  function handleRemoveTask(id: string) {
    setTasks((prevTasks) => prevTasks.filter((prevTask) => prevTask.id !== id));
  }

  function handleCompleteTask(id: string) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <View className="flex-1 items-center justify-center w-full">
      <View className="-top-6 flex-row items-center justify-center gap-x-2">
        <TextInput
          placeholder="Add a new task..."
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
        <Counters totalTasks={totalTasks} completedTasks={completedTasks} />
        <FlatList
          className="w-full"
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item: task }) => (
            <Task
              key={task.id}
              id={task.id}
              task={task.task}
              isDone={task.isDone}
              onRemove={() => handleRemoveTask(task.id)}
              onUpdate={() => handleCompleteTask(task.id)}
            />
          )}
          ListEmptyComponent={() => (
            <View className="flex items-center justify-center">
              <FontAwesome5 name="clipboard-list" size={64} color="#27272a" />
              <Text className="text-zinc-400 mt-4">
                You don't have any tasks.
              </Text>
              <Text className="text-zinc-500">
                Add new tasks and organize your day!
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
