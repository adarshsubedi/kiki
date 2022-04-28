import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import WelcomeScreen from '../WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const StarterBoard = () => {

    // const that = this;

    const navigation = useNavigation();

    const [index, setIndex] = useState(1);

    const RenderElement = () => {
        if (index === 1) {
            return <FirstScreen />
        } else if (index === 2) {
            return <SecondScreen />
        } else if (index === 3) {
            return <ThirdScreen />
        }
    }

    const onNextClick = () => {
        if(index===3)
            navigation.navigate('Welcome');
        else
            setIndex(index+1);
    }

    const onSkip = () => {
        if(index===1)
            setIndex(index+2);
        else
            setIndex(index+1);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#06001c', height: 900 }}>
                { index <= 3 &&
                    <RenderElement /> }

                <View style={styles.buttonskip}>
                    <TouchableOpacity
                        onPress={onSkip}>
                        <Text style={styles.buttontxtskip}>Skip</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.buttonStylenext}
                        onPress={onNextClick}>
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




// import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import FirstScreen from './FirstScreen';
// import SecondScreen from './SecondScreen';
// import ThirdScreen from './ThirdScreen';
// import WelcomeScreen from '../WelcomeScreen';

// const StarterBoard = () => {

//     const [index, setIndex] = useState(1)

//     const RenderElement = () => {
//         if (index === 1) {
//             return <FirstScreen />
//         } else if (index === 2) {
//             return <SecondScreen />
//         } else if (index === 3) {
//             return <ThirdScreen />
//         } else {
//             return <WelcomeScreen />
//         }
//     }

//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <View style={{ backgroundColor: '#06001c', height: 900 }}>
//                 <RenderElement />

//                 <View style={styles.button}>
//                     <TouchableOpacity
//                         style={styles.buttonStyleskip}
//                         onPress={() => setIndex(index + 2)}>
//                         <Text style={styles.buttontxtskip}>SKIP</Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         style={styles.buttonStylenext}
//                         onPress={() => setIndex(index + 1)}>
//                         <Text style={styles.buttontxtnext}>NEXT</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }


// const styles = StyleSheet.create({
//     buttonStyleskip: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: '#06001c',
//         color: 'white',
//         height: 50,
//         paddingHorizontal: 5,
//         borderRadius: 10,
//         fontFamily: 'Haas Grot Text R Web',
//         borderColor: 'white',
//         borderWidth: 1,
//         paddingRight: 5,
//         margin: 7,
        
        
//     },
//     buttonStylenext: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: 'white',
//         height: 50,
//         paddingHorizontal: 5,
//         borderRadius: 10,
//         fontFamily: 'Haas Grot Text R Web',
//         borderColor: 'white',
//         borderWidth: 1,
//         margin: 7,
        
//     },
//     buttontxtskip: {
//         color: 'white',
//         paddingTop: 15,
//         fontWeight: 'bold',
//     },
//     buttontxtnext: {
//         color: 'black',
//         paddingTop: 15,
//         fontWeight: 'bold',
//     },
//     button: {
//         flexDirection: 'row',
//         paddingHorizontal: 25,
//         position: 'absolute',
//     },
// })

// export default StarterBoard;