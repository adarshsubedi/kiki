import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

function CustomButton({
    title,
    onPress,
    disabled,
    loading,
}) {
    return (
        <TouchableOpacity
        title={title}
        onPress={onPress}
        disabled={disabled}
        loading={loading}
        buttonStyle={styles.signupbtn}
        textStyle={styles.signuptxt}
        />
    );
}


const styles = StyleSheet.create({
    signupbtn: {
        // width: windowWidth,
        marginHorizontal: 15,
        height: 50,
        backgroundColor: '#00AB55',
        // borderColor: '#00AB55',
        // borderWidth: 1,
        margin: 20,
        borderRadius: 7,
    },
    signuptxt: {
        color: 'black',
        padding: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default CustomButton;