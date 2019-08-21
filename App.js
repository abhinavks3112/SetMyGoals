import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [ enteredGoal, setEnteredGoal ] = useState('');
  const [ listGoals, setListGoals ] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setListGoals(listGoals => [...listGoals, { id: Math.random().toString(), value: enteredGoal }]);//if 'key' property name used no need to specify keyextractor otherwise needed
  };

  const goalListHandler = (goal) => (
    <View style={styles.listStyle}>
      <Text>{goal.item.value}</Text>
    </View>
  );

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
      <FlatList 
        data={listGoals}
        renderItem={goalListHandler}
        keyExtractor={(item) => item.id}
      />      
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
 },
 listStyle: {
   borderWidth: 1,
   borderColor: 'black',
   backgroundColor: '#ccc',
   padding: 10,
   marginVertical: 10,  //this property native to react native 
 }
});
