import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChangePassword = (props) => {
    const { navigation } = props
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={{
                        fontSize: 36,
                        fontFamily: 'Prompt',
                        fontWeight: 'bold',
                        color: 'white',
                        left: 15,
                        top: 70,
                    }}>
                        Change Password
                    </Text>

                    <Text style={{
                        color: 'white',
                        fontSize: 18,
                        fontFamily: 'Prompt',
                        lineHeight: 27,
                        left: 15,
                        top: 90,
                        // margin: 3,
                    }}>
                        Enter and confirm your new{'\n'}password.
                    </Text>

                    <TextInput style={styles.input}
                        placeholder={'New password'}
                        placeholderTextColor='white'
                        fontFamily='Public Sans'
                        color='white'>
                    </TextInput>

                    <TextInput style={styles.input}
                        placeholder={'Re-enter new password'}
                        placeholderTextColor='white'
                        fontFamily='Public Sans'
                        color='white'>
                    </TextInput>

                    <TouchableOpacity onPress={() => navigation.navigate('PasswordChanged')}
                        style={styles.submitbtn}>
                        <Text style={styles.submittxt}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#000E28',
    },
    input: {
        borderColor: '#637381',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        top: 119,
    },
    submitbtn: {
        top: 130,
        marginHorizontal: 9,
        height: 50,
        backgroundColor: '#00AB55',
        margin: 20,
        borderRadius: 7,
    },
    submittxt: {
        color: 'black',
        padding: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default ChangePassword;