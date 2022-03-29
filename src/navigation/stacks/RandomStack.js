import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import RandomScreen from "../../screens/randomScreen/RandomScreen";

const RandomStack = createStackNavigator();

export default function RandomStackComponent({ navigation, route }) {
  return (
    <View>
      <RandomStack.Navigator initialRouteName="Random">
        <RandomStack.Screen
          name="Random"
          component={RandomScreen}
          title="Randomizers"
        />
      </RandomStack.Navigator>
    </View>
  );
}
