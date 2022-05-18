import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/FontAwesome';
import CircularBar from './CircularBar';
import NavBar from './NavBar';
import TicketSales from './TicketSales';
import AdCamp from './AdCamp';

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

                    />
                    {/* <Icon
                        name="calendar-o"
                        size={20}
                        style={{
                            color: 'white',
                            alignSelf: 'center',
                            paddingLeft: 15,
                            paddingRight: 15,
                        }}
                    /> */}
                </View>

                <View>
                    <CircularBar />
                </View>

                <View>
                    <TicketSales />
                </View>

                <View>
                    <AdCamp/>
                </View>

                <View>
                    <NavBar />
                </View>


            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({

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