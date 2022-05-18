import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const AdCamp = () => {
    return (
        <View>
            <View style={{ backgroundColor: '#17253D', marginHorizontal: 15, borderRadius: 10, height: 375, marginTop: 20 }}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'white', fontSize: 20, marginHorizontal: 15, marginTop: 20 }}>
                        Ad campaigns
                    </Text>

                    <View style={{ flexDirection: 'row', marginLeft: 75, borderColor: '#919EAB29', borderWidth: 1, height: 35, borderRadius: 7, marginTop: 20 }}>
                        <TouchableOpacity>
                            <Text style={{ color: 'white', marginTop: 6, fontSize: 16, width: 50, marginLeft: 15 }}>
                                Value
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: 'white', top: 1.25, right: 1, fontSize: 16, borderRadius: 7, fontSize: 18, fontWeight: '900', paddingTop: 4, textAlign: 'center', height: 30, width: 35, backgroundColor: '#919EAB29' }}>
                                %
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>

                {/* <Image source={require('../images/layer.png')}
                    style={{ top: 120, position: 'absolute', marginLeft: 43, width: 266 }} /> */}

                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', opacity: 0.2, marginTop: 30, flexDirection: 'column', marginHorizontal: 15 }}>
                            100

                        </Text>
                        <Text style={{ color: 'white', opacity: 0.1, paddingTop: 30 }}>
                            --------------------------------------------------------------------------------
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', opacity: 0.2, marginTop: 30, flexDirection: 'column', marginHorizontal: 15 }}>
                            80

                        </Text>
                        <Text style={{ color: 'white', opacity: 0.1, paddingTop: 30 }}>
                            --------------------------------------------------------------------------------
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', opacity: 0.2, marginTop: 30, flexDirection: 'column', marginHorizontal: 15 }}>
                            60

                        </Text>
                        <Text style={{ color: 'white', opacity: 0.1, paddingTop: 30 }}>
                            --------------------------------------------------------------------------------
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', opacity: 0.2, marginTop: 30, flexDirection: 'column', marginHorizontal: 15 }}>
                            40

                        </Text>
                        <Text style={{ color: 'white', opacity: 0.1, paddingTop: 30 }}>
                            --------------------------------------------------------------------------------
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', opacity: 0.2, marginTop: 30, flexDirection: 'column', marginHorizontal: 15 }}>
                            20

                        </Text>
                        <Text style={{ color: 'white', opacity: 0.1, paddingTop: 30 }}>
                            --------------------------------------------------------------------------------
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', opacity: 0.2, marginTop: 30, flexDirection: 'column', marginHorizontal: 15 }}>
                            0

                        </Text>
                        <Text style={{ color: 'white', opacity: 0.1, paddingTop: 30 }}>
                            --------------------------------------------------------------------------------
                        </Text>

                        <Text style={{ marginTop: 10, backgroundColor: '#E4CE00', height: 229, width: 12, bottom: 7, borderRadius: 10, position: 'absolute', opacity: 0.3, marginTop: 24, marginLeft: 130, marginRight: 7, color: '#E4CE00', fontSize: 1 }}>
                            .
                        </Text>

                        <Text style={{ marginTop: 10, backgroundColor: '#F756CF', height: 80, width: 12, bottom: 7, borderRadius: 10, position: 'absolute', opacity: 0.3, marginTop: 24, marginLeft: 145, marginRight: 7, color: '#E4CE00', fontSize: 1 }}>
                            .
                        </Text>

                        <Text style={{ marginTop: 10, backgroundColor: '#FD7728', height: 125, width: 12, bottom: 7, borderRadius: 10, position: 'absolute', opacity: 0.3, marginTop: 24, marginLeft: 160, marginRight: 7, color: '#E4CE00', fontSize: 1 }}>
                            .
                        </Text>

                    </View>

                </View>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <Text style={{ backgroundColor: 'yellow', borderRadius: 35, height: 8, marginTop: 24, marginLeft: 60, marginRight: 7, color: 'yellow', fontSize: 18 }}>
                        x
                    </Text>
                    <Text style={{ color: 'white', fontSize: 12, paddingTop: 20 }}>
                        Early bird
                    </Text>

                    <Text style={{ backgroundColor: '#F756CF', borderRadius: 35, height: 8, marginTop: 24, marginLeft: 20, marginRight: 7, color: 'yellow', fontSize: 18 }}>
                        x
                    </Text>

                    <Text style={{ color: 'white', fontSize: 12, paddingTop: 20 }}>
                        General
                    </Text>

                    <Text style={{ backgroundColor: 'orange', borderRadius: 35, height: 8, marginTop: 24, marginLeft: 20, marginRight: 7, color: 'yellow', fontSize: 18 }}>
                        x
                    </Text>

                    <Text style={{ color: 'white', fontSize: 12, paddingTop: 20 }}>
                        VIP
                    </Text>



                </View>

            </View>
        </View>
    )
}

export default AdCamp;

const styles = StyleSheet.create({})