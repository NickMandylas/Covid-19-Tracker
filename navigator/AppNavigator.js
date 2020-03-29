import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LiveReport from "../screens/LiveReport";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Live Report" component={LiveReport} />
        {/* <Tab.Screen name="Resources" />
        <Tab.Screen name="News" /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
