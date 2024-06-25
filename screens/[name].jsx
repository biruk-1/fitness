import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

// Import images from assets
import image1 from '../assets/images/Biceps curl to shoulder press.jpg';
import image2 from '../assets/images/GYM_BACK_PIC.jpg';
import image3 from '../assets/images/inclinehammercurls.jpg';
// Add more images as needed

const images = [image1, image2, image3]; // Array of imported images

const ExerciseDetail = () => {
  const route = useRoute();
  const { exercise } = route.params;

  const [showMore, setShowMore] = useState(false);
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    // Select a random image from the images array
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  if (!exercise) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Exercise not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.nameText}>{exercise.name.toUpperCase()}</Text>
      <Text style={styles.detailText}>
        Used For {exercise.muscle.toUpperCase()} by using {exercise.equipment.toUpperCase()}
      </Text>
      <Text style={styles.description}>{exercise.description}</Text>
      {randomImage && (
        <Image
          source={randomImage}
          style={styles.image}
          resizeMode="contain"
        />
      )}
      <Text
        style={styles.instructions}
        numberOfLines={showMore ? undefined : 5}
      >
        {exercise.instructions}
      </Text>
      <View style={styles.showMoreContainer}>
        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
          <Text style={styles.showMoreText}>
            {showMore ? 'Show Less' : 'Show More'}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.duration}>Duration: {exercise.duration} mins</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    color: 'gray',
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '450',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  instructions: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 10,
  },
  showMoreContainer: {
    alignItems: 'center', // Center the button horizontally
    marginBottom: 10,
  },
  showMoreText: {
    fontSize: 14,
    color: '#1E90FF',
  },
  duration: {
    fontSize: 12,
    color: 'gray',
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});

export default ExerciseDetail;
