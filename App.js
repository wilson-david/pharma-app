import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Index from './views/Index';
import ButtonView from './components/ButtonView';
import axios from 'axios';

const Stack = createStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LoginScreen({ navigation }) {

  const [usuario, setUser] = useState('');
  const [password, setPassword] = useState('');

  const validarUser = async () => {
    try {
      const response = await axios.post('http://192.168.1.3:3000/user/getUser', {//la ip se tiene que cambiar, cada vez que se corre el proyecto da una ip
        user: usuario,
        password: password

      });
      console.log(response.data[0]['nombre']);
      //navigation.navigate('Index');
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };
  
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subTitle}>Iniciar sesion</Text>
      <TextInput style={styles.textInput} 
        placeholder='example@gmail.com'
        onChangeText={text => setUser(text)}
      />
      <TextInput style={styles.textInput}
        placeholder='Password'
        onChangeText={text => setPassword(text)} />
      <ButtonView onPress={validarUser} />
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
