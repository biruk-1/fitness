import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footter';
import exercises from '../../assets/data/exercises.json';
import FitnessTracker from '../../components/FitnessTracker';

const App = () => {
  const renderItem = ({ item }) => <FitnessTracker item={item} />;

  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
      contentContainerStyle={{gap:5 }}
      keyExtractor={(item,index)=>item.name+index}
      data={exercises} renderItem={renderItem} />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eeeded',
    padding: 10,
    paddingTop:40,
  },
  comp_container: {
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
   
  },
});

export default App;