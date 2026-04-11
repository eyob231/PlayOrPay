import {Text, View,TextInput,ToastAndroid,StyleSheet,Modal} from 'react-native';
import { useState, } from 'react';
import axios from 'axios';

export default function Login() {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const handleLogin = async () => {
      console.log('Attempting to log in with email:', email);
      console.log('Attempting to log in with password:', password);
    try {
      const response = await axios.post('http://192.168.137.1:3000/api/login', {
        email,
        password
      });
        if (response.status === 201) {
            
            setEmail('');
            setPassword('');
            setModalVisible(true);
            toastAndroid.show('Login successful', ToastAndroid.SHORT);
        } else {
            ToastAndroid.show('Invalid email or password', ToastAndroid.SHORT);
        }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  


  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Login successful!</Text>
            <Text style={styles.closeButton} onPress={() => setModalVisible(!modalVisible)}>Close</Text>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});
