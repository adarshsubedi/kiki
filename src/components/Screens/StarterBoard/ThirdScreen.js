import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const ThirdScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground source={require('../../images/onboard3.png')}
        style={{ width: 360, height: 750 }} />

      <Text style={styles.header}>
        Connect with{'\n'}those that matter{'\n'}most: friends,{'\n'}family—chosen,{'\n'}and otherwise.
      </Text>

      <Text style={styles.subheader}>
        Plan private get-togethers, share{'\n'}events, group chat, and kiki in our{'\n'}safespace for private messaging.
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Haas Grot Text R Web',
    paddingTop: 55,
    fontWeight: 'bold',
    position: 'absolute',
    lineHeight: 45,
    top: 325,
    paddingHorizontal: 15,
  },
  subheader: {
    color: 'white',
    fontSize: 18,
    paddingHorizontal: 15,
    position: 'absolute',
    top: 570,
    lineHeight: 28,
  },
})

export default ThirdScreen;