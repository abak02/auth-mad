import { View, Text, Pressable, StyleSheet } from "react-native";
import { useAuth } from "../../hooks/AuthContext";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <Text style={styles.email}>
        Welcome, {user?.email}!
      </Text>

      <Pressable style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  email: {
    fontSize: 17,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#DC2626",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});