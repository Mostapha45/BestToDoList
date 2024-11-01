import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoList from "../components/ToDoList";

export default function Index() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Do laundry", completed: false },
    { id: 2, text: "Go to gym", completed: false },
    { id: 3, text: "Walk dog", completed: false },
  ]);

  const toggleCompleteTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} onToggleComplete={toggleCompleteTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});
