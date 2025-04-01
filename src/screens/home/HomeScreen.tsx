import React from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { styles } from "./style";


export default function HomeScreen() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user}!</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}


