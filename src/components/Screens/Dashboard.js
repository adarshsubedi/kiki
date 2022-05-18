import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import CircularBar from './CircularBar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Dashboard = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.date}>
                    <TextInput
                        style={{
                            flex: 1,
                        }}
                        placeholder={' All events '}
                        placeholderTextColor="white"
                        fontFamily="Public Sans"
                        color="white"
                    />
                    <Icons
                        name="chevron-down"
                        size={25}
                        style={{
                            color: 'white',
                            alignSelf: 'center',
                            // paddingLeft: 15,
                            paddingRight: 15,
                        }}
                    />
                </View>
                <View style={styles.date}>
                    <TextInput
                        style={{
                            flex: 1,
                        }}
                        placeholder={'Jun 10 - Aug 20, 2022'}
                        placeholderTextColor="white"
                        fontFamily="Public Sans"
                        color="white"
                    // options={{format: 'DD-MM-YYYY'}}
                    // inlineImageLeft="calendar"
                    />
                    <Icon
                        name="calendar-o"
                        size={20}
                        style={{
                            color: 'white',
                            alignSelf: 'center',
                            paddingLeft: 15,
                            paddingRight: 15,
                        }}
                    />
                </View>
                <View>
                    <CircularBar />
                </View>

                <View style={{ backgroundColor: '#17253D', marginHorizontal: 15, borderRadius: 10, height: 320 }}>
                    <Text style={{ color: 'white', fontSize: 20, marginHorizontal: 15, marginTop: 20 }}>
                        Ticket Sales
                    </Text>

                    <Image source={require('../images/layer.png')}
                        style={{ top: 120, position: 'absolute', marginLeft: 43, width: 266 }} />

                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'white', opacity: 0.2, marginTop: 30, flexDirection: 'column', marginHorizontal: 15 }}>
                                10k

                            </Text>
                            <Text style={{ color: 'white', opacity: 0.1, paddingTop: 30 }}>
                                --------------------------------------------------------------------------------
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'white', opacity: 0.2, marginTop: 30, flexDirection: 'column', marginHorizontal: 15 }}>
                                8k

                            </Text>
                            <Text style={{ color: 'white', opacity: 0.1, paddingTop: 30 }}>
                                --------------------------------------------------------------------------------
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'white', opacity: 0.2, marginTop: 30, flexDirection: 'column', marginHorizontal: 15 }}>
                                4k

                            </Text>
                            <Text style={{ color: 'white', opacity: 0.1, paddingTop: 30 }}>
                                --------------------------------------------------------------------------------
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'white', opacity: 0.2, marginTop: 30, flexDirection: 'column', marginHorizontal: 15 }}>
                                2k

                            </Text>
                            <Text style={{ color: 'white', opacity: 0.1, paddingTop: 30 }}>
                                --------------------------------------------------------------------------------
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'white', opacity: 0.2, marginTop: 30, flexDirection: 'column', marginHorizontal: 15 }}>
                                0k

                            </Text>
                            <Text style={{ color: 'white', opacity: 0.1, paddingTop: 30 }}>
                                --------------------------------------------------------------------------------
                            </Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 10 }}>
                        <Text style={{ color: 'white', fontSize: 12, opacity: 0.2, paddingTop: 20 }}>
                            Jan
                        </Text>

                        <Text style={{ color: 'white', fontSize: 12, opacity: 0.2, paddingTop: 20 }}>
                            Mar
                        </Text>

                        <Text style={{ color: 'white', fontSize: 12, opacity: 0.2, paddingTop: 20 }}>
                            May
                        </Text>

                        <Text style={{ color: 'white', fontSize: 12, opacity: 0.2, paddingTop: 20 }}>
                            Jul
                        </Text>

                        <Text style={{ color: 'white', fontSize: 12, opacity: 0.2, paddingTop: 20 }}>
                            Sep
                        </Text>

                        <Text style={{ color: 'white', fontSize: 12, opacity: 0.2, paddingTop: 20 }}>
                            Nov
                        </Text>

                    </View>

                </View>

                <View style={styles.navbar}>
                    <View style={{  }}>
                        <TouchableOpacity style={{ borderRadius: 0, width: 50 }}>
                            <Image source={require('../images/Vector.png')}
                                style={{height: 25, width: 20}} />

                        </TouchableOpacity>
                    </View>
                    
                </View>

            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    navbar: {
        height: 75,

        justifyContent: 'space-evenly',
        marginHorizontal: 15,
        //paddingTop: 20,
    },
    container: {
        // height: windowHeight,
        // width: windowWidth,
        backgroundColor: '#000E28',
    },
    input: {
        borderColor: '#637381',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 6,
        padding: 10,
    },
    date: {
        borderColor: '#637381',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        paddingLeft: 10,
        flexDirection: 'row',
    },
});

export default Dashboard;