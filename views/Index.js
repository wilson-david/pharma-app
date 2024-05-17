import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Card';

export default function Index() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [dataPedido, setDataPedido] = useState({ datos: [] });

  const handleLongPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };


  const getPedidos = async () => {

    navigation.navigate('Index');
    try {
      const response = await axios.get('http://192.168.1.3:3000/user/getPedido', {//la ip se tiene que cambiar, cada vez que se corre el proyecto da una ip
        user: 'prba'
      });

      // setDataPedido(response.data);
    console.log(response.data);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  useEffect(() => {
    getPedidos();
}, []);

  return (
    <View style={styles.container}>
      <Card 
      data = {dataPedido}
        orden="1243" 
        direccion="calle 12" 
        contacto="310" 
        fecha="12-02-2024" 
        onLongPress={handleLongPress}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Opciones</Text>
                <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                  <Text style={styles.modalButtonText}>Opción 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                  <Text style={styles.modalButtonText}>Opción 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                  <Text style={styles.modalButtonText}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 150,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  modalButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
  },
});
