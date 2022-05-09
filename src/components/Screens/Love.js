import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButtonOrg from '../CustomButton/CustomButtonOrg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Love = (props) => {
    const { navigation } = props

    const [selected, setSelected] = useState();

    const ReturnMessage = () => {
        <Text>
            Selected
        </Text>
    }

    const ReturnMessageNot = () => {
        if (selected === true)
            Alert.alert('')
        else (setSelected === false)
        Alert.alert('')
    }

    const onClick = () => {
        if (selected === true) {
            return <ReturnMessage />
        } else (setSelected === false); {
            return <ReturnMessageNot />
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Experience')}>
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
                Step 3/4
            </Text>

            <Text style={{
                fontSize: 36,
                fontFamily: 'Prompt',
                fontWeight: 'bold',
                color: 'white',
                left: 15,
                lineHeight: 45,
            }}>
                Tell us what you{'\n'}love
            </Text>

            <Text style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'Prompt',
                lineHeight: 27,
                left: 15,
                paddingTop: 20,
            }}>
                Event categories
            </Text>

            <View style={{ flexDirection: 'row', paddingTop: 20, marginHorizontal: 5, justifyContent: 'space-evenly' }}>
                <CustomButtonOrg title='Arts & Theater'
                    backgroundColor={'#FC0D1B3D'}
                    borderColor={'#FC0D1B'}
                />

                <CustomButtonOrg title='Auto, Boat, Air'
                    backgroundColor={'#FD77283D'}
                    borderColor={'#FD7728'}
                />

                <CustomButtonOrg title='Beauty'
                    backgroundColor={'#F756CF3D'}
                    borderColor={'#F756CF'}
                />

                <CustomButtonOrg title='Business'
                    backgroundColor={'#6F359E3D'}
                    borderColor={'#6F359E'}
                />
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 20, marginHorizontal: 15, justifyContent: 'flex-start' }}>
                <CustomButtonOrg title='Charity & Causes'
                    backgroundColor={'#F756CF3D'}
                    borderColor={'#F756CF'}
                />
                <Text style={{ padding: 5 }}></Text>

                <CustomButtonOrg title='Community'
                    backgroundColor={'#FC0D1B3D'}
                    borderColor={'#FC0D1B'}
                />
                <Text style={{ padding: 5 }}></Text>

                <CustomButtonOrg title='Education'
                    backgroundColor={'#FEEE363D'}
                    borderColor={'#FEEE36'}
                />
            </View>

            <Text style={{
                color: 'white',
                fontSize: 18,
                left: 15,
                paddingTop: 30,
            }}>
                Event types
            </Text>

            <View style={{ flexDirection: 'row', paddingTop: 25, justifyContent: 'space-evenly' }}>
                <CustomButtonOrg title='Art show'
                    backgroundColor={'#FC0D1B3D'}
                    borderColor={'#FC0D1B'}
                />

                <CustomButtonOrg title='Book Lunch'
                    backgroundColor={'#FD77283D'}
                    borderColor={'#FD7728'}
                />

                <CustomButtonOrg title='Booze Cruise'
                    backgroundColor={'#F756CF3D'}
                    borderColor={'#F756CF'}
                />

                <CustomButtonOrg title='Brunch'
                    backgroundColor={'#6F359E3D'}
                    borderColor={'#6F359E'}
                />
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 20, marginHorizontal: 15, justifyContent: 'flex-start' }}>
                <CustomButtonOrg title='Bowling'
                    backgroundColor={'#F756CF3D'}
                    borderColor={'#F756CF'}
                />
                <Text style={{ padding: 5 }}></Text>

                <CustomButtonOrg title='Class'
                    backgroundColor={'#FC0D1B3D'}
                    borderColor={'#FC0D1B'}
                />
                <Text style={{ padding: 5 }}></Text>

                <CustomButtonOrg title='Cocktail Hour'
                    backgroundColor={'#FEEE363D'}
                    borderColor={'#FEEE36'}
                />
            </View>

            <View style={styles.btn}>
                <TouchableOpacity onPress={() => navigation.navigate('Congratulations')}
                    style={styles.skip}>
                    <Text style={styles.skiptxt}>
                        Skip
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Organizer')}
                    style={styles.next}>
                    <Text style={styles.nexttxt}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    txt: {
        color: 'white',
        marginHorizontal: 15,
        paddingTop: 12,
    },
    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#000E28',
    },
    btn: {
        justifyContent: 'space-around',
        paddingTop: 105,
    },
    skip: {
        marginHorizontal: 15,
        height: 48,
        marginBottom: 15,
        borderRadius: 7,
        borderColor: '#00AB55',
        borderWidth: 1,
    },
    skiptxt: {
        fontFamily: 'Public Sans',
        fontSize: 15,
        color: '#00AB55',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        padding: 15,
        fontWeight: 'bold',
    },
    next: {
        marginHorizontal: 15,
        height: 50,
        backgroundColor: '#00AB55',
        borderRadius: 7,
    },
    nexttxt: {
        color: 'black',
        padding: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default Love;