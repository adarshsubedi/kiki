import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const onPress = () => {
    navigation.navigate('Welcome')
}

const CustomButton = ({ onPress, title }) => {
    return (
        <View>
            <TouchableOpacity style={styles.btn}>
            
                <Text style={styles.txt}>
                    {title}
                </Text>
            </TouchableOpacity>

        </View>
    );
}



{/* <Image source={require('../images/pp1.png')}
    style={{ height: 30, width: 30, paddingTop: 10, paddingLeft: 10, }} /> */}

const styles = StyleSheet.create({
    btn: {
        marginHorizontal: 15,
        backgroundColor: '#FC0D1B3D',
        borderColor: '#FC0D1B',
        borderWidth: 1,
        borderRadius: 25,
        top: 45,
        height: 40,
        width: 140,
    },
    txt: {
        color: 'white',
        textAlign: 'right',
        fontWeight: 'bold',
        paddingTop: 10,
        right: 20,
    },
})

export default CustomButton;