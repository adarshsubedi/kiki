import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';

const SecondScreen = () => {
  return (
    <View>

      <ImageBackground source={require('../../images/onboard2.png')}
        style={{ width: 360, height: 750 }} >

      <Text style={styles.header}>
        Queer events are{'\n'}more than a good{'\n'}time; they are a{'\n'}sanctuary.
      </Text>

      <Text style={styles.subheader}>
        Foster community and elevate your{'\n'}event-planning efforts today. Kiki{'\n'}takes the hassle out of event{'\n'}planning, so that you can be an even{'\n'}better host.
      </Text>

      <View style={styles.dot}>
          <View style={styles.shortdot1}></View>
          <View style={styles.longdot}></View>
          <View style={styles.shortdot2}></View>
        </View>

      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Haas Grot Text R Web',
    paddingTop: 55,
    fontWeight: 'bold',
    position: 'absolute',
    lineHeight: 45,
    top: 300,
    paddingHorizontal: 15,
  },
  subheader: {
    color: 'white',
    fontSize: 18,
    paddingHorizontal: 15,
    position: 'absolute',
    top: 520,
    lineHeight: 28,

  },
  dot: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  longdot: {
    backgroundColor: '#00AB55',
    width: 30,
    height: 10,
    borderRadius: 10,
    top: 680,
    left: 8,
  },
  shortdot1: {
    backgroundColor: '#FFFFFF',
    opacity: 0.2,
    width: 10,
    height: 10,
    borderRadius: 10,
    top: 680,
    left: 0,
  },
  shortdot2: {
    backgroundColor: '#FFFFFF',
    opacity: 0.2,
    width: 10,
    height: 10,
    borderRadius: 10,
    top: 680,
    left: 14,
  },
})

export default SecondScreen;