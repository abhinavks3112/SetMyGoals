import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [ listGoals, setListGoals ] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    //if 'key' property name used no need to specify keyextractor otherwise needed
    setListGoals(listGoals => [...listGoals, { id: Math.random().toString(), value: enteredGoal }]);
  };  

  return (
    <View style={styles.rootViewStyle}>
      <GoalInput
        onButtonPress={addGoalHandler}
      />
      <FlatList 
        data={listGoals}
        renderItem={(goal) => <GoalItem goal={goal.item.value} />}
        keyExtractor={(item) => item.id}
      />      
    </View>
  );
}

const styles = StyleSheet.create({
 rootViewStyle: {
  padding: 30
 } 
});
