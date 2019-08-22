import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [ listGoals, setListGoals ] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    if(enteredGoal.length === 0) {
      return;
    }
      //if 'key' property name used no need to specify keyextractor otherwise needed
      setListGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
      setIsAddMode(false);    
  };  

  const deleteGoalHandler = goalId => {
    setListGoals(currentGoals => {
      return currentGoals.filter((currentGoal) => currentGoal.id !== goalId);
    });
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.rootViewStyle}>      
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />      
      <GoalInput
        visible={isAddMode}
        onAddPress={addGoalHandler}
        onCancelPress={cancelGoalHandler}
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
