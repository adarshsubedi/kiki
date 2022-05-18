import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const TicketSales = () => {
    return (
        <View>
            <View style={{ backgroundColor: '#17253D', marginHorizontal: 15, borderRadius: 10, height: 320, marginTop: 8 }}>
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

                        <Text style={{ marginTop: 10, backgroundColor: '#E4CE00', height: 145, width: 2, bottom: 7, borderRadius: 10, position: 'absolute', opacity: 0.09, marginTop: 24, marginLeft: 80, marginRight: 7, color: '#E4CE00', fontSize: 1 }}>
                            .
                        </Text>

                        <Text style={{ marginTop: 10, marginBottom: 138, backgroundColor: '#E4CE00', height: 15, width: 15, bottom: 7, borderRadius: 10, position: 'absolute', marginTop: 24, marginLeft: 74, marginRight: 7, color: '#E4CE00', fontSize: 1 }}>
                            .
                        </Text>

                        <Text style={{ marginTop: 10, backgroundColor: 'grey', opacity: 0.5, width: 60, height: 20, textAlign: 'center', marginBottom: 160, bottom: 7, borderRadius: 5, position: 'absolute', marginTop: 24, marginLeft: 55, marginRight: 7, color: 'white', fontSize: 16 }}>
                            $ 8076
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
        </View>
    )
}

export default TicketSales

const styles = StyleSheet.create({})