import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Card';

export default function Index() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Card 
        orden="1243" 
        direccion="calle 12" 
        contacto="310" 
        fecha="12-02-2024" 
        />
        <Card 
        orden="1243" 
        direccion="calle 12" 
        contacto="310" 
        fecha="12-02-2024" 
        />
      {/* <Text style={styles.text}>Esta es la Pantalla Siguiente Index</Text> */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 150
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
