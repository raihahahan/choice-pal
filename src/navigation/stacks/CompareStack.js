import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import CompareScreen from "../../screens/compareScreen/CompareScreen";

const CompareStack = createStackNavigator();

export default function CompareStackComponent({ navigation, route }) {
  return (
    <View>
      <CompareStack.Navigator initialRouteName="Compare">
        <CompareStack.Screen
          name="Compare"
          component={CompareScreen}
          title="Compare Pros and Cons"
        />
      </CompareStack.Navigator>
    </View>
  );
}
