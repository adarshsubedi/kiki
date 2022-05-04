import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const onPress = () => {
    navigation.navigate('Welcome')
}

const CustomButton = ({ onPress, title, image }) => {
    return (
        <View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt}>
                    {image}{title}
                </Text>
            </TouchableOpacity>

        </View>
    );
}



{/* <Image source={require('../images/pp1.png')}
    style={{ height: 30, width: 30, paddingTop: 10, paddingLeft: 10, }} /> */}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#FD77283D',
        height: 40,
        borderRadius: 25,
        borderColor: '#FD7728',
        borderWidth: 1,
        marginHorizontal: 10,
    },
    txt: {
        color: 'white',
        marginHorizontal: 15,
        paddingTop: 12,
        fontSize: 12,
    },
})

export default CustomButton;