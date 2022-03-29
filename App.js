import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import RootNavigator from "./src/navigation/ParentNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as ThemeProvider } from "./src/context/theme/ThemeContext";

// CONTEXT

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
