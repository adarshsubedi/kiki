import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React from 'react';

const TestScreen = () => {
  return (
    <View>
      <ImageBackground source={require('../images/onboard1.png')}
          style={{ height: 750, width: 360 }} 
          >
              <Text>
                  hello
              </Text>
          </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default TestScreen;