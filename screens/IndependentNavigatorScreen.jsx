import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function ModalScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="ModalHome" component={ModalHomeScreen} />
        <Stack.Screen name="ModalDetail" component={ModalDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ModalHomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Modal Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('ModalDetail')} />
    </View>
  );
};

const ModalDetailScreen = () => {
  return (
    <View>
      <Text>Modal Detail Screen</Text>
    </View>
  );
};

export default ModalScreen;
