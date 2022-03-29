import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";

export default function DetailedScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello world</Text>
    </View>
  );
}
