import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import styles from "./style";

export default function TaskList({ data, handleDelete }) {
  return (
    <Animatable.View
      style={styles.containerTask}
      animation="bounceIn"
      useNativeDriver
    >
      <TouchableOpacity
        style={styles.buttonTask}
        onPress={() => handleDelete(data)}
      >
        <Ionicons name="md-checkmark-circle" size={35} color="#008C8C" />
      </TouchableOpacity>
      <View>
        <Text style={styles.text}> {data.task} </Text>
      </View>
    </Animatable.View>
  );
}
