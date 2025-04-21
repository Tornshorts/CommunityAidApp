import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/community.png")}
        style={{ width: 200, height: 200, marginBottom: 20 }}
      />
      <Text style={styles.title}>Welcome to Community Aid Hub!</Text>
      <Text style={styles.subtitle}>Connecting Your Community needs.</Text>
      
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
  button: {
    backgroundColor: "#FF6A00",
    padding: 15,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
