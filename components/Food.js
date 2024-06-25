import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground, Button } from 'react-native';
import foodsData from '../assets/data/foods'; // Import your food data
import { useNavigation } from '@react-navigation/native';
import foodBackground from '../assets/images/food-background.jpg';

const Food = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('obese');
  const foods = foodsData[selectedCategory];

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('FoodDetail', { food: item })}
    >
      <View style={styles.itemContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.purpose}>{item.purpose}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={foodBackground} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <View style={styles.buttonContainer}>
            <Button
              title="Obese"
              onPress={() => setSelectedCategory('obese')}
              color={selectedCategory === 'obese' ? '#2196F3' : '#ccc'}
            />
            <Button
              title="Underweight"
              onPress={() => setSelectedCategory('underweight')}
              color={selectedCategory === 'underweight' ? '#2196F3' : '#ccc'}
            />
            <Button
              title="Moderate"
              onPress={() => setSelectedCategory('moderate')}
              color={selectedCategory === 'moderate' ? '#2196F3' : '#ccc'}
            />
          </View>
          <FlatList
            data={foods}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            contentContainerStyle={styles.flatListContainer}
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
  flatListContainer: {
    paddingVertical: 20,
  },
  item: {
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background to enhance visibility
    overflow: 'hidden',
  },
  itemContent: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  purpose: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent overlay to improve readability
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
});

export default Food;
