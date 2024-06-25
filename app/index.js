import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Header, createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../components/WelcomeScreen';
import FitnessTracker from '../components/FitnessTracker';
import CustomPage from '../screens/CustomPage';
import ExerciseDetail from '../screens/[name]'; // Dynamic import for ExerciseDetail
import Food from '../components/Food'; // Import Food screen
import exercises from '../assets/data/exercises';
const Stack = createStackNavigator();

const App = () => {
  return (
    
      <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="FitnessTracker"
          component={FitnessTracker}
          options={{
            title: 'Exercises',
            headerStyle: {
              backgroundColor: '#2675A1', // Adjust header background color
            },
            headerTintColor: '#fff', // Adjust header text color
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
         />

        <Stack.Screen
          name="CustomPage"
          component={CustomPage}
          options={({route}) =>({ title: 'Custom Page' ,
            headerStyle: {
              backgroundColor: '#2675A1',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

          })}
        />
        <Stack.Screen
          name="ExerciseDetail"
          component={ExerciseDetail}
          options={({ route }) => ({
            title: route.params.exercise.name, // Dynamic title based on exercise name
            headerStyle: {
              backgroundColor: '#2675A1',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
        <Stack.Screen
          name="Food"
          component={Food}
          options={({route}) =>({ title: 'Food Recomendation',
            headerStyle: {
              backgroundColor: '#2675A1',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }, })} // Adjust title as needed
        />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
};

export default App;
