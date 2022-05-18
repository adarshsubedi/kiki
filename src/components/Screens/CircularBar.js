import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CircularProgress from 'react-native-circular-progress-indicator';


const CircularBar = () => {
    const [value, setvalue] = useState(0);
    return (
        <View style={[styles.container]}>
            <View
                style={{
                    backgroundColor: '#005249',
                    height: 80,
                    width: 330,
                    borderRadius: 15,
                    margin: 6,
                }}>
                <View style={styles.date}>
                    <View style={styles.circle}>
                        <CircularProgress
                            radius={30}
                            value={75}
                            titleColor="#222"
                            valueSuffix={'%'}
                            inActiveStrokeColor={'#2ecc71'}
                            inActiveStrokeOpacity={0.2}
                            inActiveStrokeWidth={5}
                            activeStrokeWidth={5}
                        />
                    </View>
                    <Text style={styles.text}>
                        75%{'\n'}
                        Tickets sold
                    </Text>
                    <Icon
                        name="dollar"
                        size={50}
                        style={{
                            color: 'rgba(0, 0, 0, 0.54)',
                            alignSelf: 'center',
                            paddingTop: 8,
                            paddingRight: 10,
                            opacity: 0.2,
                        }}
                    />
                </View>
            </View>
            <View
                style={{
                    backgroundColor: '#7A4F01',
                    height: 80,
                    width: 330,
                    borderRadius: 10,
                    margin: 6,
                }}>
                <View style={styles.date}>
                    <View style={styles.circle}>
                        <CircularProgress
                            radius={30}
                            value={75}
                            titleColor="#FFC107"
                            valueSuffix={'%'}
                            inActiveStrokeColor={'#FFC107'}
                            inActiveStrokeOpacity={0.2}
                            activeStrokeColor={'#FFC107'}
                            inActiveStrokeWidth={5}
                            activeStrokeWidth={5}
                        />
                    </View>
                    <Text style={styles.text}>
                        {' '}
                        $5,874{'\n'}
                        Gross income
                    </Text>
                    <Icon
                        name="dollar"
                        size={50}
                        style={{
                            color: 'rgba(0, 0, 0, 0.54)',
                            alignSelf: 'center',
                            paddingTop: 8,
                            paddingRight: 10,
                            opacity: 0.2,
                        }}
                    />
                </View>
            </View>
            <View
                style={{
                    backgroundColor: '#6F359E',
                    height: 80,
                    width: 330,
                    borderRadius: 10,
                    margin: 6,
                }}>
                <View style={styles.date}>
                    <View style={styles.circle}>
                        <CircularProgress
                            radius={30}
                            value={75}
                            titleColor="#B066ED"
                            valueSuffix={'%'}
                            inActiveStrokeColor={'#B066ED'}
                            inActiveStrokeOpacity={0.2}
                            activeStrokeColor={'#B066ED'}
                            inActiveStrokeWidth={5}
                            activeStrokeWidth={5}
                            
                        />
                    </View>
                    <Text style={styles.text}>
                        $4,512{'\n'}
                        Net income
                    </Text>
                    <Icon
                        name="dollar"
                        size={50}
                        style={{
                            color: 'rgba(0, 0, 0, 0.54)',
                            alignSelf: 'center',
                            paddingTop: 8,
                            paddingRight: 10,
                            opacity: 0.2,

                        }}
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 10,
        // flexDirection: 'column',
    },
    date: {
        borderColor: '#637381',
        // borderWidth: 1,
        // marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        // paddingLeft: ,
        flexDirection: 'row',
    },
    text: {
        flex: 1,
        alignSelf: 'center',
        marginHorizontal: 20,
        fontSize: 17,
        fontWeight: 'bold',
        // opacity: 0.5,
        color: '#222D65',
    },
      circle: {
          
      },
});

export default CircularBar;