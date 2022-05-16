import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = (props) => {
    const { navigation } = props
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                        <Icon name='arrow-back' size={30}
                            style={{
                                color: 'white',
                                paddingLeft: 13,
                                paddingTop: 25,

                            }}>
                        </Icon>
                    </TouchableOpacity>
                    <Text style={styles.login}>
                        Log in
                    </Text>
                    <Text style={styles.txt}>
                        Enter your email and {'\n'}password to log in.
                    </Text>
                    <View>
                        <TextInput style={styles.input}
                            placeholder={'Email address'}
                            placeholderTextColor='#637381'
                            fontFamily='Public Sans'
                            color='white'
                        />

                        <TextInput style={styles.input}
                            placeholder={'Password'}
                            placeholderTextColor='#637381'
                            fontFamily='Public Sans'

                        />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                        <Text style={styles.forget}>
                            Forget Password?
                        </Text>
                    </TouchableOpacity>

                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}
                        style={styles.btn}>
                            <Text style={{
                                fontSize: 17,
                                fontFamily: 'Public Sans',
                                textAlign: 'center',
                                borderRadius: 7,
                                margin: 12,
                                fontWeight: 'bold',
                            }}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.account}>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={styles.signup}>
                                Sign up now
                            </Text>
                        </TouchableOpacity>
                    </View>
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
    login: {
        fontSize: 36,
        fontFamily: 'Prompt',
        fontWeight: 'bold',
        color: 'white',
        left: 15,
        paddingTop: 20,
    },
    txt: {
        fontSize: 18,
        fontFamily: 'Prompt',
        color: 'white',
        lineHeight: 30,
        height: 55,
        margin: 15,

    },
    forget: {
        fontFamily: 'Public Sans',
        fontSize: 18,
        // borderBottomColor: '#00AB55',

        // borderBottomWidth: 1,
        color: '#00AB55',
        height: 30,
        textAlign: 'right',
        margin: 15,
    },
    btn: {
        backgroundColor: '#00AB55',
        height: 45,
        margin: 15,
        borderRadius: 7,

    },
    account: {
        fontFamily: 'Public Sans',
        fontSize: 16,
        color: 'white',
    },
    signup: {
        fontFamily: 'Public Sans',
        fontSize: 16,
        color: '#00AB55',
        borderBottomColor: '#00AB55',
        borderBottomWidth: 1,
        left: 5,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 210,
    },
    input: {
        borderColor: '#637381',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        padding: 10,
    },
})

export default LoginScreen;