import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.listStyle}>
            <Text>{props.goal}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    listStyle: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#ccc',
        padding: 10,
        marginVertical: 10,  //this property native to react native 
    }
});

export default GoalItem;