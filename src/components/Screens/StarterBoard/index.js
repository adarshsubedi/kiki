import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import React, { useState} from 'react';
import WelcomeScreen from '../WelcomeScreen';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

const StarterBoard = () => {

    const [index, setIndex] = useState(1)

    const RenderElement = () => {
        if (index === 1) {
            return <FirstScreen />
        } else if (index === 2) {
            return <SecondScreen />
        } else if (index === 3) {
            return <ThirdScreen />
        } else {
            return <WelcomeScreen />
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, position: 'relative' }}>
            <View style={{ backgroundColor: '#06001c', height: 900 }}>
                <RenderElement />

                <View style={styles.buttonskip}>
                    <TouchableOpacity
                        onPress={() => setIndex(index + 2)}>
                        <Text style={styles.buttontxtskip}>Skip</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.buttonStylenext}
                        onPress={() => setIndex(index + 1)}>
                        <Text style={styles.buttontxtnext}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    buttonStylenext: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00AB55',
        height: 50,
        borderRadius: 7,
        fontFamily: 'Haas Grot Text R Web',
    },
    buttontxtskip: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttontxtnext: {
        color: 'black',
        paddingTop: 15,
        fontWeight: 'bold',
    },
    button: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        position: 'absolute',
        top: 660,
        width: 230,
        alignItems: 'flex-end',
        left: 150,
    },
    buttonskip: {
        flexDirection: 'row',
        position: 'absolute',
        top: 660,
        width: 230,
        alignItems: 'flex-end',
        left: 300,
        top: 45,
        lineHeight: 28,
    },
})

export default StarterBoard;