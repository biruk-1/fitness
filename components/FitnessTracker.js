import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import exercisesData from '../assets/data/exercises.json';
import { useNavigation } from '@react-navigation/native';
import fitnessImage from '../assets/images/Biceps curl to shoulder press.jpg';

const FitnessTracker = () => {
  const navigation = useNavigation();
  const exercises = exercisesData;

  if (!exercises) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
  }

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ExerciseDetail', { exercise: item })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.duration}>Duration: {item.duration} mins</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={fitnessImage} style={styles.backgroundImage}>
        <View style={styles.opacityContainer}>
          <FlatList
            data={exercises}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#c8c1c8',
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
  duration: {
    fontSize: 12,
    color: 'gray',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  opacityContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here (0.5 means 50% opacity)
    padding: 20, // Adjust padding as needed
  },
});

export default FitnessTracker;
