import { View, TextInput, Button, Text, TouchableOpacity,StyleSheet } from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useRouter, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
const [errorMessage, setErrorMessage] = useState("");

const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    router.replace("/"); // Redirect to home screen after login
  } catch (error) {
    setErrorMessage((error as Error).message); // Set error message to display
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>

      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={20}
          color="#aaa"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#aaa"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text
        onPress={() => router.push("../register")}
        style={styles.signupText}
      >
        Don't have an account? register
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
    color: "#ff2f",
    marginBottom: 20,
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
  input: {
    flex: 1,
    color: "#ff2f",
    height: 50,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
    color: "#ff2f", // Icon color to match placeholder text
  },
  error: {
    color: "#FF4D4D",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1E1F25",
    padding: 15,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    marginTop: 10,
    color: "#ff2f",
  },
  buttonText: {
    color: "#ff2f",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupText: {
    color: "#fff",
    marginTop: 15,
  },
  signupLink: {
    color: "#ff2f",
    fontWeight: "bold",
  },
});