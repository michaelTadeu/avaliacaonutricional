import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../constants/Colors";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Settings from "../screens/Settings";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // can be opened with 'swipe'
          gestureEnabled: true,
          headerStyle: {
            // styling of header bar
            backgroundColor: Colors.backgroundColor
          },
          headerTitleStyle: {
            // styling of title
            fontWeight: "bold"
          },
          headerTintColor: Colors.tintColor, // Color of main title
          headerBackTitleVisible: false // Hides title next to back button in header-bar (default is 'true')
        }}
        headerMode="float"
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({ route }) => ({
            title: route.params.item.name
          })}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: "Settings" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
