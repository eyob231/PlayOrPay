import { Text, View, StyleSheet,TextInput,ToastAndroid } from 'react-native';
import { useState } from 'react';
import axios from 'axios';


export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleSignup = async () => {
    try {
      const response = await axios.post('http://192.168.137.1:3000/api/register', {
        username,
        email,
        password
      });
        if (response.status === 201) {
            ToastAndroid.show('User created successfully', ToastAndroid.SHORT);
            setUsername('');
            setEmail('');
            setPassword('');
        } else {
            ToastAndroid.show('Error creating user', ToastAndroid.SHORT);
        }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text onPress={handleSignup}>Sign Up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
