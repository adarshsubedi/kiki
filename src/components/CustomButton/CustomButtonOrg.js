import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const onPress = () => {
    navigation.navigate('Welcome')
}

const CustomButtonOrg = ({ onPress, title, backgroundColor, borderColor }) => {
    return (
        <View>
            <Text style={{  backgroundColor, borderColor, borderRadius: 25, borderWidth: 1,}}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.txt}>
                        {title}
                    </Text>
                </TouchableOpacity>
            </Text>

        </View>
    );
}


const styles = StyleSheet.create({
    btn: {
        height: 38,
        marginHorizontal: 15,
        right: 10,
    },
    txt: {
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 12,
        paddingTop: 16,
        //paddingBottom: 7,
        bottom: 4,
    },
})

export default CustomButtonOrg;