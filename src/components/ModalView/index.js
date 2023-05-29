import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import styles from "./style";

export default function ModalView({ hendlerClosed, task, setTask }) {
  const [input, setInput] = useState("");

  function handleAdd() {
    if (input === "") return;

    const data = {
      key: input,
      task: input,
    };

    setTask([...task, data]);
    hendlerClosed(false);
    setInput("");
  }

  const handleChangeText = (text) => {
    setInput(text);
  };

  return (
    <SafeAreaView style={styles.containerModal}>
      <View style={styles.modalHeader}>
        <TouchableOpacity onPress={hendlerClosed}>
          <Ionicons
            style={styles.btnCloseModal}
            name="md-arrow-back-circle"
            size={55}
            color="#008C8C"
          />
        </TouchableOpacity>
        <Text style={styles.modalTitle}>Nova Tarefa</Text>
      </View>

      <Animatable.View
        style={styles.modalBody}
        animation="fadeInUp"
        useNativeDriver
      >
        <TextInput
          multiline={true}
          placeholderTextColor="#00303088"
          altoCorret={false}
          style={styles.modalInput}
          placeholder="O que preisa fazer hoje?"
          value={input}
          onChangeText={handleChangeText}
          //onChangeText={(texto) => setInput(texto)}
        />

        <TouchableOpacity style={styles.modalBtnAdd}>
          <Text style={styles.modalTextBtn} onPress={handleAdd}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
}
