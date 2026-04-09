import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { axios } from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://192.168.137.1:3000/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>Data from backend:</Text>
      {data && (
        <View>
          <Text>{data.message}</Text>
          <Text>{new Date(data.timestamp).toLocaleString()}</Text>
          
        </View>
      )}  
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
