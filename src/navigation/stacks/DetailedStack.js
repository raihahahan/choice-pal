import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import DetailedScreen from "../../screens/detailedScreen/DetailedScreen";

const DetailedStack = createStackNavigator();

export default function DetailedStackComponent({ navigation, route }) {
  return (
    <View>
      <DetailedStack.Navigator initialRouteName="Detailed">
        <DetailedStack.Screen
          name="Detailed"
          component={DetailedScreen}
          title="Detailed Decision"
        />
      </DetailedStack.Navigator>
    </View>
  );
}
