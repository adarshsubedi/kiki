import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EnterCode = (props) => {
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
                Enter Code
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
                Enter the OTP code sent to{'\n'}johndoe@gmail.com
            </Text>


            <View style={styles.otp}>
                <TextInput style={styles.code}
                    placeholderTextColor='white'
                    fontFamily='Public Sans'
                    color='white'
                    keyboardType='numeric'
                />
                <TextInput style={styles.code}
                    placeholderTextColor='white'
                    fontFamily='Public Sans'
                    color='white'
                    keyboardType='numeric'
                />
                <TextInput style={styles.code}
                    placeholderTextColor='white'
                    fontFamily='Public Sans'
                    color='white'
                    keyboardType='numeric'
                />
                <TextInput style={styles.code}
                    placeholderTextColor='white'
                    fontFamily='Public Sans'
                    color='white'
                    keyboardType='numeric'
                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}
                style={styles.continuebtn}>
                <Text style={styles.continuetxt}>
                    Continue
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
    code: {
        borderColor: '#637381',
        borderWidth: 1,
        marginHorizontal: 2,
        borderRadius: 7,
        margin: 7,
        width: 80,
        top: 50,
        textAlign: 'center',
    },
    otp: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
    },
    continuebtn: {
        top: 50,
        marginHorizontal: 9,
        height: 50,
        backgroundColor: '#00AB55',
        margin: 20,
        borderRadius: 7,
    },
    continuetxt: {
        color: 'black',
        padding: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default EnterCode;