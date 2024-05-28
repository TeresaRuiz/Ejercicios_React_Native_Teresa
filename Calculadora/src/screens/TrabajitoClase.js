import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data/data';
import Boton from '../components/Boton';
import dataActividad from '../data/dataActividad';

const TrabajitoClase = ({ navigation }) => {
    const informacion = dataActividad;

    const irPantalla1 = () => {
        navigation.navigate('Pantalla1');
    };
    return (
        <View style={styles.container }>
            <Text style={styles.title}>Pokemones y cosas ramdom</Text>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={informacion}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.titleCard}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.flatListContainer}>
            <Text style={styles.title2}>Cosas Ramdom</Text>
            <FlatList
                    data={informacion}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.titleCard}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.flatListContainer}>
            <Text style={styles.title2}>Cosas Ramdom</Text>
            <FlatList
                    data={informacion}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.titleCard}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <Boton
                textoBoton='Regresar a Inicio'
                accionBoton={irPantalla1}
            />
        </View>
    );
};

export default TrabajitoClase;


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#D8DEFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 20,
    },
    flatListContainer: {
        height: 200, // Altura fija para evitar el crecimiento automático
        marginHorizontal:10
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 6,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems:'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    titleCard:{
        fontSize:20,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    title2:{
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
    },
    texto:{
        marginHorizontal:15
    }
});

