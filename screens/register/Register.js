import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { mainScreens } from '../../styles';

const Register  = () => {
    return (
      <View style={mainScreens.container}>
      <Text>Register
      </Text>
      <View style={mainScreens.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
      <StatusBar style="auto" />
    </View>
    );
  }

  export default Register;