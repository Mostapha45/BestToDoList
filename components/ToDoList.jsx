import React from "react";
import { ScrollView, View, Text, Pressable, Button, StyleSheet } from "react-native";

function ToDoList({ tasks, onToggleComplete, onRemoveTask }) {
  return (
    <ScrollView>
      {tasks.map((task) => (
        <View
          key={task.id}
          style={[styles.task, task.completed ? styles.completed : styles.outstanding]} 
        >
          <Pressable onPress={() => onToggleComplete(task.id)}>
            <View>
              <Text style={styles.taskText}>{task.text}</Text>
             {/* <Text style={styles.statusText}>
                {task.completed ? "Completed" : "Outstanding"}</Text> {/* Show status of task */}
            </View>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completed: {
    backgroundColor: "#ABE08B", // Green background for completed tasks
  },
  outstanding: {
    backgroundColor: "#FFA8B5", // Red for outstanding tasks
  },
  taskText: {
    fontSize: 16,
  },
  statusText: {
    fontSize: 12,
    color: "black",
  },
});

export default ToDoList;
