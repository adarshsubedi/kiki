import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Congratulations = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Organizer')}>
        <Icon name='arrow-back' size={30}
          style={{
            color: 'white',
            paddingLeft: 13,
            paddingTop: 25,
          }}>
        </Icon>
      </TouchableOpacity>

      <Text style={{
        fontSize: 36,
        fontFamily: 'Prompt',
        fontWeight: 'bold',
        color: 'white',
        left: 15,
        lineHeight: 45,
        paddingTop: 20,
      }}>
        Congratulations!
      </Text>

      <Text style={{
        color: 'white',
        fontSize: 18,
        fontFamily: 'Prompt',
        lineHeight: 27,
        left: 15,
        top: 20,
        // margin: 3,
      }}>
        Please check and confirm your email to{'\n'}continue browsing our events.
      </Text>

      <TouchableOpacity
        //onPress={() => navigation.navigate('Congratulations')}
        style={styles.loginnow}>
        <Text style={styles.loginnowtxt}>
          Log in now
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#000E28',
  },
  loginnow: {
    // width: windowWidth,
    marginHorizontal: 15,
    height: 50,
    backgroundColor: '#00AB55',
    borderRadius: 7,
    top: 520,
  },
  loginnowtxt: {
    color: 'black',
    padding: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default Congratulations;