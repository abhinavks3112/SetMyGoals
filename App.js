import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [ enteredGoal, setEnteredGoal ] = useState('');
  const [ listGoals, setListGoals ] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setListGoals(listGoals => [...listGoals, enteredGoal]);
  };

  return (
    <View style={styles.rootViewStyle}>
      <View style={styles.inputContainerStyle}>
        <TextInput 
        placeholder="Please enter your goal here" 
        style={styles.textInputStyle} 
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
 rootViewStyle: {
  padding: 30
 },
 inputContainerStyle: {
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center'
 },
 textInputStyle: {
  borderColor: 'black', 
  borderWidth: 1, 
  width: '80%'
 }
});
