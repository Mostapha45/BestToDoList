import React, { useState } from "react";
import { Button } from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from "../layouts/MainLayout";

const HomeScreen = ({ navigation }) => {
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

  const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <MainLayout>
      <ToDoList tasks={tasks} onToggleComplete={toggleCompleteTask} onRemoveTask={removeTask} />
      <ToDoForm addTask={addTask} tasks={tasks} />
      <Button title="Go to About" onPress={() => navigation.navigate("About")} />
    </MainLayout>
  );
};

export default HomeScreen;
