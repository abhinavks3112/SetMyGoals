import React, { useState }  from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({ onAddPress, onCancelPress, visible }) => {
    const [ enteredGoal, setEnteredGoal ] = useState('');

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    };

    const addGoalHandler = () => {         
        onAddPress(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={visible} animationType='slide' >
            <View style={styles.inputContainerStyle}>
                <TextInput 
                placeholder="Please enter your goal here" 
                style={styles.textInputStyle} 
                onChangeText={goalInputHandler}
                value={enteredGoal}
                />
                <View style={styles.buttonContainerStyle}>
                    {/* Other way to pass argument would be ()=>onButtonPress(enteredGoal) */}
                    <View style={styles.buttonStyle}>
                        <Button title="ADD" onPress={addGoalHandler} />  
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button title="CANCEL" color='red' onPress={onCancelPress} />
                    </View> 
                </View>
            </View>
        </Modal>
    );
};

const styles=StyleSheet.create({
    inputContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputStyle: {
        borderColor: 'black', 
        borderWidth: 1, 
        width: '80%',
        marginBottom: 10
    },
    buttonContainerStyle: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonStyle: {
        width: '40%'
    }
});

export default GoalInput;