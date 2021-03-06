import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignupScreen = (props) => {
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
                    <Text style={styles.signup}>
                        Sign up
                    </Text>
                    <Text style={styles.txt}>
                        Enter your basic information. It{'\n'} only takes a minute.
                    </Text>
                    <View>
                        <TextInput style={styles.input}
                            placeholder={'First name'}
                            placeholderTextColor='white'
                            fontFamily='Public Sans'
                            color='white'
                        />
                        <TextInput style={styles.input}
                            placeholder={'Last name'}
                            placeholderTextColor='white'
                            fontFamily='Public Sans'
                            color='white'
                        />
                        <View style={styles.iconplace}>
                            <TextInput
                                style={{
                                    flex: 1,
                                }}
                                placeholder={'Date of birth'}
                                placeholderTextColor='white'
                                fontFamily='Public Sans'
                                color='white'
                                inlineImageLeft='calendar' />

                            <Icon name='calendar' size={20}
                                style={{
                                    color: 'white',
                                    alignSelf: 'center',
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                }} />
                        </View>
                        <TextInput style={styles.input}
                            placeholder={'Password'}
                            placeholderTextColor='white'
                            fontFamily='Public Sans'
                            color='white'
                        />
                        <TextInput style={styles.input}
                            placeholder={'Re-enter password'}
                            placeholderTextColor='white'
                            fontFamily='Public Sans'
                            color='white'
                        />

                    </View>
                    <View style={styles.horizontal}>
                        <TextInput style={styles.code}
                            placeholder={'Code'}
                            placeholderTextColor='white'
                            fontFamily='Public Sans'
                            color='white'
                        />
                        <TextInput style={styles.number}
                            placeholder={'Phone number'}
                            placeholderTextColor='white'
                            fontFamily='Public Sans'
                            color='white'
                        />
                    </View>
                    <View style={styles.iconplace}>
                        <TextInput
                            style={{
                                flex: 1,
                            }}
                            placeholder={'Preferred pronoun'}
                            placeholderTextColor='white'
                            fontFamily='Public Sans'
                            color='white' />

                        <Icon name='chevron-down' size={15}
                            style={{
                                color: 'white',
                                alignSelf: 'center',
                                paddingLeft: 15,
                                paddingRight: 15,
                            }} />
                    </View>
                    <Text style={styles.help}>
                        Helps us recommend more relevant content and events
                    </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Location')}
                        style={styles.signupbtn}>
                        <Text style={styles.signuptxt}>
                            Sign up
                        </Text>
                    </TouchableOpacity>

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#000E28',
    },
    signup: {
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
    input: {
        borderColor: '#637381',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        padding: 10,
    },
    iconplace: {
        borderColor: '#637381',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    horizontal: {
        flexDirection: 'row',
    },
    code: {
        borderColor: '#637381',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        width: 80,
        padding: 10,
    },
    number: {
        borderColor: '#637381',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        width: 240,
        padding: 10,
    },
    help: {
        color: 'white',
        //marginTop: 5, 
        fontSize: 12,
        paddingLeft: 20,

    },
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