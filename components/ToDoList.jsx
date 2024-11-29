import React from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function ToDoList({ tasks, onToggleComplete, onRemoveTask }) {
  return (
    <ScrollView style={styles.list}>
      {tasks.map((task) => (
        <View
          key={task.id}
          style={[styles.taskCard, task.completed ? styles.completed : styles.outstanding]}
        >
          <TouchableOpacity onPress={() => onToggleComplete(task.id)} style={styles.taskContent}>
            <Ionicons
              name={task.completed ? "checkmark-circle" : "ellipse-outline"}
              size={24}
              color={task.completed ? "#4CAF50" : "#ff6b6b"}
            />
            <Text style={styles.taskText}>{task.text}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onRemoveTask(task.id)}>
            <Ionicons name="trash" size={24} color="#888" />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    paddingHorizontal: 10,
  },
  taskCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  completed: {
    backgroundColor: "#e8f5e9",
  },
  outstanding: {
    backgroundColor: "#ffe9e9",
  },
  taskContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ToDoList;
