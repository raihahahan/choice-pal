import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Context as ThemeContext } from "../context/theme/ThemeContext";

import DetailedStackComponent from "./stacks/DetailedStack";
import CompareStackComponent from "./stacks/CompareStack";
import RandomStackComponent from "./stacks/RandomStack";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";

const ParentTabs = createMaterialBottomTabNavigator();
const ParentDrawer = createDrawerNavigator();

function ParentTabsNavigator() {
  const { state: theme } = useContext(ThemeContext);
  return (
    <View style={{ flex: 1 }}>
      <ParentTabs.Navigator
        initialRouteName="DetailedStack"
        shifting={true}
        activeColor={globalStyles[theme].text.color}
        screenOptions={{
          tabBarColor: globalStyles[theme].background.backgroundColor,
        }}
      >
        <ParentTabs.Screen
          name="DetailedStack"
          component={DetailedStackComponent}
          options={{
            tabBarLabel: "Detailed",
            tabBarIcon: () => (
              <Ionicons
                color={globalStyles[theme].text.color}
                name="receipt-outline"
                size={24}
              />
            ),
          }}
        />
        <ParentTabs.Screen
          name="CompareStack"
          component={CompareStackComponent}
          options={{
            tabBarLabel: "Pros and Cons",
            tabBarIcon: () => (
              <Ionicons
                name="copy-outline"
                size={24}
                color={globalStyles[theme].text.color}
              />
            ),
          }}
        />
        <ParentTabs.Screen
          name="RandomStack"
          component={RandomStackComponent}
          options={{
            tabBarLabel: "Random",
            tabBarIcon: () => (
              <Ionicons
                name="help-buoy-outline"
                size={24}
                color={globalStyles[theme].text.color}
              />
            ),
          }}
        />
      </ParentTabs.Navigator>
    </View>
  );
}

function DrawerNavigator() {
  return (
    <ParentDrawer.Navigator screenOptions={{ headerShown: false }}>
      <ParentDrawer.Screen name="Home" component={ParentTabsNavigator} />
    </ParentDrawer.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
