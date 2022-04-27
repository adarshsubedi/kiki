import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PasswordChanged = (props) => {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Icon name='arrow-back' size={30}
                    style={{
                        color: 'white',
                        padding: 20,

                    }}>
                </Icon>
            </TouchableOpacity>

            <Text style={{
                fontSize: 36,
                fontFamily: 'Prompt',
                fontWeight: 'bold',
                color: 'white',
                left: 15,
            }}>
                Congratulations!
            </Text>

            <Text style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'Prompt',
                lineHeight: 27,
                left: 15,
                top: 20,
                // margin: 3,
            }}>
              Your password has been{'\n'}changed.
            </Text>

            <TouchableOpacity 
            //onPress={() => navigation.navigate('EnterCode')}
                style={styles.loginbtn}>
                <Text style={styles.logintxt}>
                    Log in
                </Text>
            </TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#000E28',
    },
    loginbtn: {
        top: 475,
        marginHorizontal: 9,
        height: 50,
        backgroundColor: '#00AB55',
        margin: 20,
        borderRadius: 7,
    },
    logintxt: {
        color: 'black',
        padding: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default PasswordChanged;