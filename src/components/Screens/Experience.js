import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Experience = (props) => {
    const { navigation } = props
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('Location')}>
                        <Icon name='arrow-back' size={30}
                            style={{
                                color: 'white',
                                paddingLeft: 13,
                                paddingTop: 25,

                            }}>
                        </Icon>
                    </TouchableOpacity>

                    <Text style={{
                        fontFamily: 'Prompt',
                        fontSize: 16,
                        color: '#00AB55',
                        left: 15,
                        lineHeight: 27,
                        paddingTop: 20,
                    }}>
                        Step 2/4
                    </Text>

                    <Text style={{
                        fontSize: 36,
                        fontFamily: 'Prompt',
                        fontWeight: 'bold',
                        color: 'white',
                        left: 15,
                    }}>
                        Customize your{'\n'}experience
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
                        How would you like to use Kiki?
                    </Text>

                    <View>

                        <View style={styles.iconplace}>
                            <TextInput
                                style={{
                                    flex: 1,
                                }}
                                placeholder={'Select user type'}
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

                        <View style={styles.iconplace}>
                            <TextInput
                                style={{
                                    flex: 1,
                                }}
                                placeholder={'What kind of organizer are you?'}
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

                        <TextInput style={styles.input}
                            placeholder={'Name of the organizer'}
                            placeholderTextColor='white'
                            fontFamily='Public Sans'
                            color='white'>
                        </TextInput>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Love')}
                        style={styles.signupbtn}>
                        <Text style={styles.signuptxt}>
                            Next
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
        top: 45,
        padding: 10,
    },
    signupbtn: {
        top: 270,
        marginHorizontal: 15,
        height: 50,
        backgroundColor: '#00AB55',
        margin: 20,
        borderRadius: 7,
    },
    signuptxt: {
        color: 'black',
        padding: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    iconplace: {
        borderColor: '#637381',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        paddingLeft: 10,
        flexDirection: 'row',
        top: 40,
    },
})

export default Experience;