import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, ScrollView, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../CustomButton/CustomButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Love = (props) => {
    const { navigation } = props
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Love')}>
                    <Icon name='arrow-back' size={30}
                        style={{
                            color: 'white',
                            paddingLeft: 13,
                            paddingTop: 19,
                        }}>
                    </Icon>
                </TouchableOpacity>

                <Text style={{
                    fontFamily: 'Prompt',
                    fontSize: 16,
                    color: '#00AB55',
                    left: 15,
                    paddingTop: 20,
                    //lineHeight: 27,
                }}>
                    Step 4/4
                </Text>

                <Text style={{
                    fontSize: 36,
                    fontFamily: 'Prompt',
                    fontWeight: 'bold',
                    color: 'white',
                    left: 15,
                    //lineHeight: 45,
                }}>
                    Follow{'\n'}organizers
                </Text>

                <Text style={{
                    color: 'white',
                    fontSize: 18,
                    fontFamily: 'Prompt',
                    lineHeight: 27,
                    left: 15,
                    paddingTop: 20
                    //top: 20,
                    // margin: 3,
                }}>
                    Follow your favorite event{'\n'}promoters, event organizers,{'\n'}event spaces and bars.
                </Text>

                <Text style={{
                    color: 'white',
                    fontSize: 18,
                    fontFamily: 'Prompt',
                    lineHeight: 27,
                    left: 15,
                    paddingTop: 30,
                    paddingBottom: 25,
                }}>
                    Bar</Text>

                <View style={{ flexDirection: 'row', marginLeft: 8 }}>
                    <CustomButton title='Ralph Edwards'
                    image={require('../images/pp1.png')} 
                    />


                    <CustomButton title='Productions'
                    // img={require('../images/pp1.png')} 
                    />


                </View>

                <View style={{ flexDirection: 'row', paddingTop: 10, marginLeft: 8 }}>
                    <CustomButton title='Arlene McCoy' />


                    <CustomButton title='Cameron Williamson' />

                </View>

                <View style={{ flexDirection: 'row', paddingTop: 10, marginLeft: 8 }}>
                    <CustomButton title='Wade Warren' />
                    {/* <Image source={require('../images/pp1.png')}/> */}


                    <CustomButton title='Mohammad’s Pro...' />
                    {/* <Image source={require('../images/pp1.png')}/> */}

                </View>

                {/* <View style={styles.btn}>
                <TouchableOpacity onPress={() => navigation.navigate('Congratulations')}
                    style={styles.skip}>
                    <Text style={styles.skiptxt}>
                        Skip
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Congratulations')}
                    style={styles.next}>
                    <Text style={styles.nexttxt}>
                        Next
                    </Text>
                </TouchableOpacity>

            </View> */}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#000E28',
    },
    btn: {
        justifyContent: 'space-around',
        top: 380,
    },
    skip: {
        marginHorizontal: 15,
        height: 48,
        //backgroundColor: '#00AB55',
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
        // width: windowWidth,
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