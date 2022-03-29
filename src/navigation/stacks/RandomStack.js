import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { Context as ThemeContext } from "../../context/theme/ThemeContext";
import { globalStyles } from "../../styles/globalStyles";

import RandomScreen from "../../screens/randomScreen/RandomScreen";

const RandomStack = createStackNavigator();

export default function RandomStackComponent({ navigation, route }) {
  const { state: theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: globalStyles[theme].background.backgroundColor,
      }}
    >
      <RandomStack.Navigator
        initialRouteName="Random"
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
        <RandomStack.Screen
          options={{
            headerTitle: () => (
              <Text style={{ ...globalStyles[theme].text, fontSize: 16 }}>
                Randomizers
              </Text>
            ),
          }}
          name="Random"
          component={RandomScreen}
          title="Randomizers"
        />
      </RandomStack.Navigator>
    </View>
  );
}
