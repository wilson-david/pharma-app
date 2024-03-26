import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function Button() {

    return(

        <TouchableOpacity style={styles.container}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#FFB677', '#FF3CBD']}
                star={{x:1, y:0}}
                end={{x:0, y:1}}
                style={styles.button}
                >
                <Text style={styles.text}>Sign in </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        width: 200,
        marginTop: 60,
    },

    text:{
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',

    },

    button:{
        width: '80%',
        height: 50, 
        alignItems: 'center',
        justifyContent: 'center'
    }


});