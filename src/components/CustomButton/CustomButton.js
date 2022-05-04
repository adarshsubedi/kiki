import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const onPress = () => {
    navigation.navigate('Welcome')
}

const CustomButton = ({ onPress, title, image, backgroundColor, borderColor }) => {
    return (
        <View>
            <Text style={{  backgroundColor, borderColor, borderRadius: 25, borderWidth: 1,}}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.txt}>
                        <Image source={image} />    {title}
                    </Text>
                </TouchableOpacity>
            </Text>

        </View>
    );
}


const styles = StyleSheet.create({
    btn: {
        //height: 42,
        //borderRadius: 25,
        //marginHorizontal: 10,
        // margin: 15,
    },
    txt: {
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 12,
        paddingBottom: 7,
        // alignContent: 'center',
        bottom: 4,
        // right: 2,
    },
})

export default CustomButton;