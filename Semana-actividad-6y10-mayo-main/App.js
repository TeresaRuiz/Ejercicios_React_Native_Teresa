import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [carnet, setCarnet] = useState('');
  const [materiaFavorita, setMateriaFavorita] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [alumnos, setAlumnos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const agregarAlumno = () => {
    if (nombre && carnet && materiaFavorita) {
      const nuevoAlumno = {
        id: Math.random().toString(),
        nombre: nombre,
        carnet: carnet,
        materiaFavorita: materiaFavorita,
        fechaNacimiento: fechaNacimiento,
      };

      setAlumnos([...alumnos, nuevoAlumno]);
      setNombre('');
      setCarnet('');
      setMateriaFavorita('');
      setFechaNacimiento(new Date());
      setModalVisible(false);
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  // Función para la vista 
  return (
    <View style={styles.container}>
      <Button title="Agregar Alumno" onPress={() => setModalVisible(true)}  color="#8a2be2" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={nombre}
              onChangeText={setNombre}
            />
            <TextInput
              style={styles.input}
              placeholder="Carnet"
              value={carnet}
              onChangeText={setCarnet}
            />
            <TextInput
              style={styles.input}
              placeholder="Materia Favorita"
              value={materiaFavorita}
              onChangeText={setMateriaFavorita}
            />
            <Button title="Seleccionar Fecha de Nacimiento" onPress={() => {}} />
            <Button title="Agregar Alumno" onPress={agregarAlumno}  color="#8a2be2" />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
      <FlatList
        data={alumnos}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.alumnoItem}>
            <Text style={styles.alumnoText}>Nombre: {item.nombre}</Text>
            <Text style={styles.alumnoText}>Carnet: {item.carnet}</Text>
            <Text style={styles.alumnoText}>Materia Favorita: {item.materiaFavorita}</Text>
            <Text style={styles.alumnoText}>
              Fecha de Nacimiento: {item.fechaNacimiento.toDateString()}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AFAFAF',
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#DEDEDE',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  alumnoItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginTop: 20,
    borderRadius: 16,
  },
  alumnoText: {
    fontSize: 16,
  },
});

export default App;

