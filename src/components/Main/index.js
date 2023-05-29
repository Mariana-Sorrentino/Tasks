import React, { useState, useCallback, useEffect } from "react";
import { TouchableOpacity, SafeAreaView, FlatList, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TaskList from "../TaskList";
import ModalView from "../ModalView";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import styles from "./style";
const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function Main() {
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);

  // Função para buscar a lista salva no Local Storage ao iniciar o app
  useEffect(() => {
    async function loadTasks() {
      const taskStorage = await AsyncStorage.getItem("@task");
      if (taskStorage) {
        setTask(JSON.parse(taskStorage));
      }
    }

    loadTasks();
  }, []);
  // Deixando os []  vazio, essa função será chamada quando iniciar o app

  //Salvando os ítens caso tenha alguma alteração
  useEffect(() => {
    async function saveTasks() {
      await AsyncStorage.setItem("@task", JSON.stringify(task));
    }

    saveTasks();
  }, [task]);
  // Deixando os [task]  o useEffect fica monitorando o task

  const handleDelete = useCallback((data) => {
    const find = task.filter((r) => r.key !== data.key);
    setTask(find);
  });

  return (
    <SafeAreaView style={styles.containerMain}>
      <FlatList
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => (
          <TaskList data={item} handleDelete={handleDelete} />
        )}
      />

      <Modal animationType="slide" transparent={false} visible={open}>
        <ModalView
          hendlerClosed={() => setOpen(false)}
          task={task}
          setTask={setTask}
        />
        {/*O **hendlerClosed** é para passar o setOpen(false) para o component
        MotalView e adicionar a propriedade de "fechar" no botão*/}
      </Modal>

      {open === false && (
        <AnimatedBtn
          style={styles.button}
          useNativeDriver
          animation="bounceInUp"
          duration={1500}
          onPress={() => setOpen(true)}
        >
          <Ionicons
            name="ios-add"
            size={55}
            color="#C1D6D6"
            fontWeight="bold"
          />
        </AnimatedBtn>
      )}
    </SafeAreaView>
  );
}
