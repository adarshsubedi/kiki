import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const TextField = () => {
    return (
        <View>
            <TextInput style={styles.input}
                placeholder={'First name'}
                placeholderTextColor='white'
                fontFamily='Public Sans'
                color='white'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: '#637381',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        padding: 10,
    },
})

export default TextField;