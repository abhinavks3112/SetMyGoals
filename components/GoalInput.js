import React, { useState }  from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({ onButtonPress }) => {
    const [ enteredGoal, setEnteredGoal ] = useState('');

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    };

    return (
        <View style={styles.inputContainerStyle}>
            <TextInput 
            placeholder="Please enter your goal here" 
            style={styles.textInputStyle} 
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
            <Button title="ADD" onPress={onButtonPress.bind(this, enteredGoal)} />
            {/* Other way to pass argument would be ()=>onButtonPress(enteredGoal) */}
        </View>
    );
};

const styles=StyleSheet.create({
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

export default GoalInput;