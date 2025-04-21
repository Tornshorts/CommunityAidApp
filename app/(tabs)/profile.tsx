import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const displayName = user.displayName || "Anonymous";
      setUsername(displayName);
      setEmail(user.email || "");
    }
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.replace("/(auth)/login");
    } catch (error) {
      Alert.alert("Error", "Failed to sign out.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/avatar.png")}
        style={styles.avatar}
      />
      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={20}
          color="#aaa"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <Text style={styles.email}>{email}</Text>

      <View style={styles.card}>
        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={20} color="#ff2f" />
          <Text style={styles.infoText}>Joined: March 2025</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={20} color="#ff2f" />
          <Text style={styles.infoText}>Location: Nairobi, Kenya</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="star-outline" size={20} color="#ff2f" />
          <Text style={styles.infoText}>Level: Beginner</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2F38",
    alignItems: "center",
    paddingTop: 60,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#ff2f",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  email: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#3A3F4B",
    borderRadius: 12,
    padding: 20,
    width: "85%",
    marginBottom: 30,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  infoText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#ff2f",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#2C2F38",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3A3F4B",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: "90%",
  },
  input: {
    flex: 1,
    color: "#ff2f",
    height: 50,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
    color: "#ff2f",
  },
});
