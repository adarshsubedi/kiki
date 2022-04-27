import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
// import { Dimensions } from 'react-native';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const FirstScreen = () => {
  return (
    <View>
      <ImageBackground source={require('../../images/onboard1.png')}
        style={{ width: 360, height: 750 }} />

      <Text style={styles.header}>
        The definitive{'\n'}source for queer{'\n'}fun and{'\n'}entertainment.
      </Text>

      <Text style={styles.subheader}>
        Kiki is the leading social activity{'\n'}network and ticketing platform for in-{'\n'}person and virtual events, centering{'\n'}the LGBTQ+ experience.
      </Text>
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
    top: 310,
    paddingHorizontal: 15,
  },
  subheader: {
    color: 'white',
    fontSize: 18,
    paddingHorizontal: 15,
    position: 'absolute',
    top: 530,
    lineHeight: 28,

  },
})

export default FirstScreen;