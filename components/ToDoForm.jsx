import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

const ToDoForm = ({ addTask, tasks }) => {
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(false);

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      setError(true);
      return;
    }

    // Debugging: Check tasks and new task
    console.log("Tasks:", tasks);
    console.log("New Task:", newTask);

    // Check for duplicates
    const isDuplicate = tasks.some(
      (task) => task.text.toLowerCase() === newTask.trim().toLowerCase()
    );

    console.log("Is Duplicate:", isDuplicate); // Debugging

    if (isDuplicate) {
      Alert.alert("Duplicate Task", "This task already exists!");
      return;
    }

    addTask(newTask.trim());
    setNewTask("");
    setError(false);
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholder="Add a new task..."
        value={newTask}
        onChangeText={(text) => {
          setNewTask(text);
          setError(false);
        }}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: "#f9f9f9",
  },
  inputError: {
    borderColor: "#ff6b6b",
  },
  addButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default ToDoForm;
