import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listStyle}>
                <Text>{props.goal}</Text>
            </View>
        </TouchableOpacity>       
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