import React from "react";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";

export default function Title() {
  return (
    <LinearGradient
      locations={[0.2, 0.98]}
      colors={["#A14F95", "#33BDBD"]}
      style={styles.linearGradient}
    >
      <Text style={styles.title}>MINHAS TAREFAS</Text>
    </LinearGradient>
  );
}
