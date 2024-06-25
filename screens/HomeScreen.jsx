import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import exercises from '../assets/data/exercises.json';
import FitnessTracker from '../components/FitnessTracker';

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => <FitnessTracker item={item} navigation={navigation} />; 

  return (
    <View style={styles.container}>
      <FlatList 
        contentContainerStyle={{ gap: 5 }}
        keyExtractor={(item, index) => item.name + index}
        data={exercises} 
        renderItem={renderItem} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eeeded',
    padding: 10,
  },
  comp_container: {
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
