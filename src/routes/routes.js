import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GroupInfo from "../screens/GroupInfoScreen";
import Login from "../screens/LoginScreen";
import Home from "../screens/HomeScreen";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: "blue",
        }}
      >
        <AppStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <AppStack.Screen name="Grupo" component={GroupInfo} />
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}