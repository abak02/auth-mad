import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";

export default function Index() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const renderTask = ({ item }) => (
    <View className="bg-white rounded-2xl p-4 mb-3 flex-row items-center shadow-sm border border-gray-100">
      <Pressable
        onPress={() => toggleTask(item.id)}
        className={`w-7 h-7 rounded-full mr-3 justify-center items-center ${
          item.completed
            ? "bg-emerald-500"
            : "border-2 border-gray-300"
        }`}
      >
        {item.completed && (
          <Text className="text-white font-bold">✓</Text>
        )}
      </Pressable>

      <Text
        className={`flex-1 text-base ${
          item.completed
            ? "line-through text-gray-400"
            : "text-gray-800"
        }`}
      >
        {item.task}
      </Text>

      <Pressable
        onPress={() => deleteTask(item.id)}
        className="bg-red-50 px-3 py-2 rounded-xl"
      >
        <Text className="text-red-500 font-medium">
          Delete
        </Text>
      </Pressable>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-50 px-5 pt-16">
      {/* Header */}
      <View className="mb-8">
        <Text className="text-4xl font-bold text-gray-900">
          My Tasks
        </Text>

        <Text className="text-gray-500 mt-2">
          Stay productive and organized ✨
        </Text>
      </View>

      {/* Stats Card */}
      <View className="bg-emerald-500 rounded-3xl p-5 mb-6 shadow-lg">
        <Text className="text-emerald-100 text-sm">
          Remaining Tasks
        </Text>

        <Text className="text-white text-4xl font-bold mt-1">
          {tasks.filter((item) => !item.completed).length}
        </Text>
      </View>

      {/* Input */}
      <View className="flex-row mb-6">
        <TextInput
          value={task}
          onChangeText={setTask}
          placeholder="Add new task..."
          className="flex-1 bg-white rounded-2xl px-5 py-4 mr-3 shadow-sm border border-gray-200"
        />

        <Pressable
          onPress={addTask}
          className="bg-emerald-500 px-6 justify-center rounded-2xl shadow-lg"
        >
          <Text className="text-white font-bold text-lg">
            +
          </Text>
        </Pressable>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="items-center mt-20">
            <Text className="text-6xl mb-3">📝</Text>

            <Text className="text-lg font-semibold text-gray-600">
              No Tasks Yet
            </Text>

            <Text className="text-gray-400 text-center mt-2">
              Add your first task and start being productive.
            </Text>
          </View>
        }
      />
    </View>
  );
}
