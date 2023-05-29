import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Main from "./src/components/Main";
import Title from "./src/components/Title";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <StatusBar style="auto" />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#240F30",
    justifyContent: "center",
  },
});
