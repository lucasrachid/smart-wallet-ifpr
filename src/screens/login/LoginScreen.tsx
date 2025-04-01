import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { styles } from "./style";


export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Número da matrícula"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Acessar" onPress={() => login(username, password)} />
    </View>
  );
}


