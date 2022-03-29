import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { globalStyles } from "../../styles/globalStyles";

import { Context as ThemeContext } from "../../context/theme/ThemeContext";

import DetailedScreen from "../../screens/detailedScreen/DetailedScreen";

const DetailedStack = createStackNavigator();

export default function DetailedStackComponent({ navigation, route }) {
  const { state: theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: globalStyles[theme].background.backgroundColor,
      }}
    >
      <DetailedStack.Navigator
        initialRouteName="Detailed"
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
        <DetailedStack.Screen
          options={{
            headerTitle: () => (
              <Text style={{ ...globalStyles[theme].text, fontSize: 16 }}>
                Detailed Decision
              </Text>
            ),
          }}
          name="Detailed"
          component={DetailedScreen}
          title="Detailed Decision"
        />
      </DetailedStack.Navigator>
    </View>
  );
}
