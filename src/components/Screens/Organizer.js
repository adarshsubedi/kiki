import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, ScrollView, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../CustomButton/CustomButton';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

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
                    paddingTop: 25,
                }}>
                    Step 4/4
                </Text>

                <Text style={{
                    fontSize: 36,
                    fontFamily: 'Prompt',
                    fontWeight: 'bold',
                    color: 'white',
                    left: 15,
                }}>
                    Follow{'\n'}organizers
                </Text>

                <Text style={{
                    color: 'white',
                    fontSize: 18,
                    fontFamily: 'Prompt',
                    lineHeight: 27,
                    left: 15,
                    paddingTop: 25,
                }}>
                    Follow your favorite event{'\n'}promoters, event organizers,{'\n'}event spaces and bars.
                </Text>

                <Text style={{
                    color: 'white',
                    fontSize: 18,
                    fontFamily: 'Prompt',
                    lineHeight: 27,
                    left: 15,
                    paddingTop: 25,
                    paddingBottom: 25,
                }}>
                    Bar</Text>

                <View style={{ flexDirection: 'row', marginLeft: 8 }}>
                    <CustomButton title='Ralph Edwards'
                        backgroundColor={'#FC0D1B3D'}
                        borderColor={'#FC0D1B'}
                        image={require('../images/pp1.png')}
                    />

                    <Text style={{ padding: 5 }}></Text>

                    <CustomButton title='Productions'
                        backgroundColor={'#FFFFFF3D'}
                        borderColor={'#FFFFFF'}
                        image={require('../images/pp2.png')}
                    />


                </View>

                <View style={{ flexDirection: 'row', paddingTop: 10, marginLeft: 8 }}>
                    <CustomButton title='Arlene McCoy'
                        backgroundColor={'#6F359E3D'}
                        borderColor={'#6F359E'}
                        image={require('../images/pp3.png')}
                    />



                    <Text style={{ padding: 5 }}></Text>

                    <CustomButton title='Cameron Williamson'
                        backgroundColor={'#FD77283D'}
                        borderColor={'#FD7728'}
                        image={require('../images/pp4.png')}
                    />

                </View>

                <View style={{ flexDirection: 'row', paddingTop: 10, marginLeft: 8 }}>
                    <CustomButton title='Wade Warren'
                        backgroundColor={'#FEEE363D'}
                        borderColor={'#E4CE00'}
                        image={require('../images/pp5.png')}
                    />

                    <Text style={{ padding: 5 }}></Text>

                    <CustomButton title='Mohammad’s Pro...'
                        backgroundColor={'#FD77283D'}
                        borderColor={'#FD7728'}
                        image={require('../images/pp6.png')}
                    />

                </View>



                <Text style={{
                    color: 'white',
                    fontSize: 18,
                    fontFamily: 'Prompt',
                    lineHeight: 27,
                    left: 15,
                    paddingTop: 25,
                    paddingBottom: 25,
                }}>
                    Promoter</Text>



                <View style={{ flexDirection: 'row', marginLeft: 8 }}>
                    <CustomButton title='Arlene McCoy'
                        backgroundColor={'#6F359E3D'}
                        borderColor={'#6F359E'}
                        image={require('../images/pp3.png')}
                    />

                    <Text style={{ padding: 5 }}></Text>


                    <CustomButton title='Cameron Williamson'
                        backgroundColor={'#FD77283D'}
                        borderColor={'#FD7728'}
                        image={require('../images/pp4.png')}
                    />

                </View>

                <View style={{ flexDirection: 'row', paddingTop: 10, marginLeft: 8 }}>
                    <CustomButton title='Ralph Edwards'
                        backgroundColor={'#FC0D1B3D'}
                        borderColor={'#FC0D1B'}
                        image={require('../images/pp1.png')}
                    />

                    <Text style={{ padding: 5 }}></Text>


                    <CustomButton title='Productions'
                        backgroundColor={'#FFFFFF3D'}
                        borderColor={'#FFFFFF'}
                        image={require('../images/pp2.png')}
                    />

                </View>

                <View style={{ flexDirection: 'row', paddingTop: 10, marginLeft: 8 }}>
                    <CustomButton title='Arlene McCoy'
                        backgroundColor={'#6F359E3D'}
                        borderColor={'#6F359E'}
                        image={require('../images/pp3.png')}
                    />

                    <Text style={{ padding: 5 }}></Text>


                    <CustomButton title='Cameron Williamson'
                        backgroundColor={'#FD77283D'}
                        borderColor={'#FD7728'}
                        image={require('../images/pp4.png')}
                    />

                </View>


                <View style={{ flexDirection: 'row', paddingTop: 10, marginLeft: 8 }}>
                    <CustomButton title='Wade Warren'
                        backgroundColor={'#FEEE363D'}
                        borderColor={'#E4CE00'}
                        image={require('../images/pp5.png')}
                    />

                    <Text style={{ padding: 5 }}></Text>


                    <CustomButton title='Mohammad’s Pro...'
                        backgroundColor={'#FD77283D'}
                        borderColor={'#FD7728'}
                        image={require('../images/pp6.png')}
                    />

                </View>

                <View style={{ flexDirection: 'row', paddingTop: 10, marginLeft: 8 }}>
                    <CustomButton title='Ralph Edwards'
                        backgroundColor={'#FC0D1B3D'}
                        borderColor={'#FC0D1B'}
                        image={require('../images/pp1.png')}
                    />

                    <Text style={{ padding: 5 }}></Text>


                    <CustomButton title='Productions'
                        backgroundColor={'#FFFFFF3D'}
                        borderColor={'#FFFFFF'}
                        image={require('../images/pp2.png')}
                    />

                </View>

                <View style={{ flexDirection: 'row', paddingTop: 10, marginLeft: 8, paddingBottom: 50 }}>
                    <CustomButton title='Arlene McCoy'
                        backgroundColor={'#6F359E3D'}
                        borderColor={'#6F359E'}
                        image={require('../images/pp3.png')}
                    />

                    <Text style={{ padding: 5 }}></Text>


                    <CustomButton title='Cameron Williamson'
                        backgroundColor={'#FD77283D'}
                        borderColor={'#FD7728'}
                        image={require('../images/pp4.png')}
                    />

                </View>

                <View style={styles.btn}>
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

                </View>


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // height: windowHeight,
        // width: windowWidth,
        backgroundColor: '#000E28',
    },
    btn: {
        justifyContent: 'space-around',
        paddingBottom: 40,
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