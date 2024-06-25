import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Modal } from 'react-native';
import customImage from '../assets/images/GYM_ABS_pic.jpg';
import { useNavigation } from '@react-navigation/native';

const CustomPage = ({ navigation }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [workoutRecommendation, setWorkoutRecommendation] = useState('');
  const [foodRecommendation, setFoodRecommendation] = useState('');
  const [bmiCondition, setBMICondition] = useState('');

  const calculateBMI = () => {
    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);
    setBMI(bmiValue.toFixed(1));

    // Determine BMI condition
    if (bmiValue < 18.5) {
      setBMICondition('Underweight');
      setWorkoutRecommendation('Strength training and muscle building.');
      setFoodRecommendation('Increase intake of protein-rich foods like lean meats, eggs, and dairy.');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBMICondition('Normal weight');
      setWorkoutRecommendation('Cardiovascular exercises and flexibility training.');
      setFoodRecommendation('Maintain a balanced diet with plenty of fruits, vegetables, and whole grains.');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBMICondition('Overweight');
      setWorkoutRecommendation('High-intensity interval training (HIIT) and weight management exercises.');
      setFoodRecommendation('Focus on portion control and reduce intake of processed foods and sugars.');
    } else {
      setBMICondition('Obese');
      setWorkoutRecommendation('Low-impact exercises and gradual weight loss programs.');
      setFoodRecommendation('Emphasize on nutrient-dense foods and consult with a nutritionist for a personalized diet plan.');
    }

    setModalVisible(true); // Show modal after calculating BMI
  };

  // Navigation functions
  const navigateToFitnessTracker = () => {
    setModalVisible(false); // Close modal before navigating
    navigation.navigate('FitnessTracker');
  };

  const navigateToFoods = () => {
    setModalVisible(false); // Close modal before navigating
    navigation.navigate('Food'); // Navigate to 'Food' screen
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={customImage} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.label}>Enter your Height (cm):</Text>
          <TextInput
            style={styles.input}
            placeholder="Height"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
            textAlign="center"
          />
          <Text style={styles.label}>Enter your Weight (kg):</Text>
          <TextInput
            style={styles.input}
            placeholder="Weight"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
            textAlign="center"
          />
          <TouchableOpacity style={styles.button} onPress={calculateBMI}>
            <Text style={styles.buttonText}>Calculate BMI</Text>
          </TouchableOpacity>
          {bmi && (
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Your BMI: {bmi}</Text>
                  <Text style={styles.modalText}>Condition: {bmiCondition}</Text>
                  <Text style={styles.modalText}>Workout Recommendation: {workoutRecommendation}</Text>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={navigateToFitnessTracker}
                  >
                    <Text style={styles.modalButtonText}>Go to Fitness Tracker</Text>
                  </TouchableOpacity>
                  <Text style={styles.modalText}>Food Recommendation: {foodRecommendation}</Text>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={navigateToFoods}
                  >
                    <Text style={styles.modalButtonText}>Go to Foods</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ ...styles.openButton, backgroundColor: '#2675A1' }}
                    onPress={() => {
                      setModalVisible(false);
                    }}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent overlay
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: 'white', // Text color
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white', // Input background color
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%', // Ensure the image covers the entire background
  },
  button: {
    backgroundColor: '#333', // Button background color
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff', // Button text color
    fontSize: 16,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Slightly brighter modal background color with opacity
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    backgroundColor: '#2675A1', // Modal button background color
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  modalButtonText: {
    color: 'white', // Modal button text color
    fontSize: 16,
    textAlign: 'center',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'white', // Modal text color
  },
});

export default CustomPage;
