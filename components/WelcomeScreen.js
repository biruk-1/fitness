import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import welcomeImage from '../assets/images/Biceps curl to shoulder press.jpg';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Fitness App</Text>
      </View>
      
      {/* Main Content */}
      <View style={styles.content}>
        {/* Left Border */}
        <View style={styles.leftBorder} />

        {/* Image Background with Overlay */}
        <ImageBackground source={welcomeImage} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>Welcome to Fitness App</Text>
            <Text style={styles.subtitle}>Achieve Your Fitness Goals</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Exercises"
                onPress={() => navigation.navigate('FitnessTracker')}
                color="#fff" // Button text color
              />
              <Button
                title="Custom Page"
                onPress={() => navigation.navigate('CustomPage')}
                color="#fff" // Button text color
              />
            </View>
          </View>
        </ImageBackground>

        {/* Right Border */}
        <View style={styles.rightBorder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f', // Background color
  },
  header: {
    backgroundColor: '#333', // Header background color
    height: 60, // Header height
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20, // Adjust padding for status bar
    borderBottomWidth: 2, // Border width
    borderBottomColor: '#fff', // Border color
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // Header text color
  },
  content: {
    flex: 1,
    flexDirection: 'row', // Arrange children horizontally
  },
  leftBorder: {
    backgroundColor: '#333', // Left border color
    width: 10, // Left border width
  },
  rightBorder: {
    backgroundColor: '#333', // Right border color
    width: 10, // Right border width
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent overlay
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // Text color
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Text shadow for contrast
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
});

export default WelcomeScreen;
