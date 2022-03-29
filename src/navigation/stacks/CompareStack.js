import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { Context as ThemeContext } from "../../context/theme/ThemeContext";
import { globalStyles } from "../../styles/globalStyles";

import CompareScreen from "../../screens/compareScreen/CompareScreen";

const CompareStack = createStackNavigator();

export default function CompareStackComponent({ navigation, route }) {
  const { state: theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: globalStyles[theme].background.backgroundColor,
      }}
    >
      <CompareStack.Navigator
        initialRouteName="Compare"
        screenOptions={{
          cardStyle: {
            backgroundColor: globalStyles[theme].background.backgroundColor,
          },
          headerStyle: {
            backgroundColor: globalStyles[theme].background.backgroundColor,
            shadowColor: "transparent",
          },
        }}
      >
        <CompareStack.Screen
          options={{
            headerTitle: () => (
              <Text style={{ ...globalStyles[theme].text, fontSize: 16 }}>
                Pros and Cons
              </Text>
            ),
          }}
          name="Compare"
          component={CompareScreen}
          title="Compare Pros and Cons"
        />
      </CompareStack.Navigator>
    </View>
  );
}
