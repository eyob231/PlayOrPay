import {Text, View,TextInput,ToastAndroid,StyleSheet} from 'react-native';
import { useState, } from 'react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.137.1:3000/api/login', {
        email,
        password
      });
        if (response.status === 200) {
            ToastAndroid.show('Login successful', ToastAndroid.SHORT);
            setEmail('');
            setPassword('');
        } else {
            ToastAndroid.show('Invalid email or password', ToastAndroid.SHORT);
        }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };


  return (
    <View style={styles.container}>
        <Text>Login</Text>
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
      <Text onPress={handleLogin}>Login</Text>
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
