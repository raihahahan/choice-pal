import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { globalStyles } from "../../styles/globalStyles";
import { Context as ThemeContext } from "../../context/theme/ThemeContext";

export default function RandomScreen({ navigation, route }) {
  const { state: theme } = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={globalStyles[theme].text}>Random</Text>
    </View>
  );
}
