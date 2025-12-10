import { useLocalSearchParams } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { TodoItemsData } from "@/utils/data";
import { useState } from "react";

const getTodoData = (todoId: number) => {
  return TodoItemsData.at(todoId - 1);
};

export default function TodoOverview() {
  const { todoId } = useLocalSearchParams();
  const [data, setData] = useState(getTodoData(Number(todoId)));

  return (
    <View className="flex-1 items-center p-4">
      <Text>id de la todo: {todoId}</Text>
      <Text>Page de détail de la todo</Text>
      <Text>Tache: {data?.name}</Text>
      <Text>Complété : {data?.completed ? "Oui" : "Non"}</Text>
      <Pressable
        className="bg-blue-500 rounded-md p-2 w-20"
        onPress={() =>
          setData((prev) => ({ ...prev, completed: !prev?.completed }))
        }
      >
        <Text className="text-white text-center">
          {data?.completed ? "décocher" : "cocher"}
        </Text>
      </Pressable>
    </View>
  );
}
