import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from './components/button';

export default function App() {


  //funcion que valida el usuario ingresado
  const validar_user = () => {

    fetch(`http://localhost:3000/usuario/getUser`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user})
      })
        .then(res => res.json())
        .then(responseData => {
          // console.log(responseData['usuario']);
          
        });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subTitle}>Sing In to  your account</Text>
      <TextInput style={styles.textInput} placeholder='example@gmail.com'></TextInput>
      <TextInput style={styles.textInput} placeholder='Password'></TextInput>
      <Button />
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
