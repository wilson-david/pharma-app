import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card({ orden, direccion, contacto,fecha }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.row}>
        <Text style={styles.label}>Orden:</Text>
        <Text style={styles.value}>{orden}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Dirección:</Text>
        <Text style={styles.value}>{direccion}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Contacto:</Text>
        <Text style={styles.value}>{contacto}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Fecha:</Text>
        <Text style={styles.value}>{fecha}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 350,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {
    flex: 1,
  },
});
