import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from './components/Button';
import axios from 'axios';

export default function App() {
  const API_URL = 'http://192.168.56.1:3000/api';

  const validarUser = async () => {
    try {
      const email = 'example@gmail.com'; // Obtener el valor del campo de entrada de correo electrónico
      const password = 'password'; // Obtener el valor del campo de entrada de contraseña
      console.log(`${API_URL}/registros`);
      // Realizar una solicitud POST a la ruta '/login' en tu servidor
      const response = await axios.post(`${API_URL}/registros`, { email, password });

      console.log('Respuesta del servidor:', response.data); // Imprimir la respuesta del servidor en la consola
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subTitle}>Sing In to  your account</Text>
      <TextInput style={styles.textInput} placeholder='example@gmail.com'></TextInput>
      <TextInput style={styles.textInput} placeholder='Password'></TextInput>
      <Button onPress={validarUser} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 80,
    color: '#000',
    fontWeight: 'bold'
  },

  subTitle:{
    fontSize: 30,
    color: 'gray'
  },

  textInput:{
    borderWidth: 1,
    borderColor: 'gray',
    paddingStart: 30,
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff'
  }
});
