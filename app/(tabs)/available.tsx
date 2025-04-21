import { View, Text, FlatList, StyleSheet } from "react-native";

// Dummy task data (replace later with Firebase)
const tasks = [
  { id: "1", title: "Help with groceries" },
  { id: "2", title: "Clean up community center" },
];

export default function AvailableTasks() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Available Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
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
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  taskItem: {
    backgroundColor: "#3A3F4B",
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    width: "90%",
  },
});
