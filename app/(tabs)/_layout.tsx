import { Tabs } from "expo-router";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="habits"
        options={{
          title: "Habits",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="chain" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="dailyTodos"
        options={{
          title: "Todos",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="check" color={color} size={28} />
          ),
        }}
      />
    </Tabs>
  );
}
