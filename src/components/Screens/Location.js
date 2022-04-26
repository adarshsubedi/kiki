import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Location = (props) => {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Icon name='arrow-left' size={30}
                    style={{
                        color: 'white',
                        padding: 19,

                    }}>
                </Icon>
            </TouchableOpacity>

            <Text style={{
                fontFamily: 'Prompt',
                fontSize: 16,
                color: '#00AB55',
                left: 15,
                lineHeight: 27,
            }}>
                Step 1/4
            </Text>

            <Text style={{
                fontSize: 36,
                fontFamily: 'Prompt',
                fontWeight: 'bold',
                color: 'white',
                left: 15,
            }}>
                Select your{'\n'}location
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
                Let us know where you are{'\n'}located, so we can customize{'\n'}events near you.
            </Text>

            <TextInput style={styles.input}
                placeholder={'Your location'}
                placeholderTextColor='white'
                fontFamily='Public Sans'
                color='white'
            >
                <Icon name='map-marker' size={25}
                    style={{
                        color: 'white',
                        padding: 19,
                        position: 'absolute',
                        alignSelf: 'flex-end',
                        justifyContent: 'flex-end',
                    }}>
                </Icon>

            </TextInput>

            <TouchableOpacity onPress={() => navigation.navigate('Experience')}
                style={styles.signupbtn}>
                <Text style={styles.signuptxt}>
                    Next
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
    input: {
        borderColor: '#637381',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        top: 55,
        padding: 10,
    },
    signupbtn: {
        top: 350,
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

})

export default Location;