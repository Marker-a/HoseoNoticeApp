import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DepartmentSelectionScreen from "./screens/DepartmentSelectionScreen";
import NoticeScreen from "./screens/NoticeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DepartmentSelection" component={DepartmentSelectionScreen} />
        <Stack.Screen name="NoticeScreen" component={NoticeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
