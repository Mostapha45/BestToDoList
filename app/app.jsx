import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Do laundry", completed: true },
    { id: 2, text: "Go to gym", completed: false },
    { id: 3, text: "Walk dog", completed: true },
  ]);

  // Function to add a new task with a unique ID
  const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  };

  // Function to toggle task completion status
  const toggleCompleteTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to remove a task
  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} onToggleComplete={toggleCompleteTask} onRemoveTask={removeTask} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});