import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function CreateTaskScreen() {
  const [task, setTask] = useState("");

  const handleCreateTask = () => {
    // Later, post this to Firebase/Firestore
    alert(`Task Created: ${task}`);
    setTask("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Task</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={{ flex: 1, color: "#fff" }}
          placeholder="Task Title"
          placeholderTextColor="#aaa"
          value={task}
          onChangeText={setTask}
        />
      </View>

      <Button title="Create Task" onPress={handleCreateTask} />

      <Text style={styles.subtitle}>
        Create a task to help someone in need.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C2F38",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#ff2f",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3A3F4B",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: "90%",
    color: "#ff2f",
  },
});
