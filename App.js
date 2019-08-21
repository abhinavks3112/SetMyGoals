import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [ listGoals, setListGoals ] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    //if 'key' property name used no need to specify keyextractor otherwise needed
    setListGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
  };  

  const deleteGoalHandler = goalId => {
    setListGoals(currentGoals => {
      return currentGoals.filter((currentGoal) => currentGoal.id !== goalId);
    });
  }

  return (
    <View style={styles.rootViewStyle}>
      <GoalInput
        onButtonPress={addGoalHandler}
      />
      <FlatList 
        data={listGoals}
        renderItem={(goal) => 
        <GoalItem 
        id={goal.item.id}
        goal={goal.item.value} 
        onDelete={() => deleteGoalHandler(goal.item.id)}          
        />}
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
