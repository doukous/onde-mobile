import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TodoItemsData } from "@/utils/data";

interface ItemProps {
  id?: number;
  name: string;
  completed?: boolean;
}

const TodoItem = ({ id, name }: ItemProps) => {
  return (
    <Pressable
      className="bg-white h-16 my-2 rounded-lg items-center justify-center"
      onPress={() => router.navigate(`/todos/${id}`)}
    >
      <Text>{name}</Text>
    </Pressable>
  );
};

export default function DailyTodos() {
  return (
    <View className="w-full flex-1 items-center justify-center relative">
      <FlatList
        className="w-full px-2"
        data={TodoItemsData}
        renderItem={({ item }) => <TodoItem id={item.id} name={item.name} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity className="bg-blue-400 p-4 rounded-2xl absolute bottom-6 right-6">
        <FontAwesome6 name="plus" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}
