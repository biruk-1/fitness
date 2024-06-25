import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const Profile = () => {
  const [counter, setCounter] = useState(0);

  const counting = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={counting} style={styles.btnStyle}>
        <Text style={styles.btnText}>Countbtn</Text>
      </TouchableOpacity>
      <Text>Hi you have clicked {counter} times</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnStyle: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#4c00ff',
    padding: 10,
    borderRadius: 5
  },
  btnText: {
    color: '#3b603b',
    textAlign: 'center'
  }
});
export default Profile;
