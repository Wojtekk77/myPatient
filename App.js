
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './screens/register/Register';
import Patients from './screens/patients/Patients';
import Login from './screens/login/Login';
import Patient from './screens/patients/Patient';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Patients"
        onPress={() => navigation.navigate('Patients')}
      />
      <Button
        title="Patient"
        onPress={() => navigation.navigate('Patient')}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />

    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Patients" component={Patients} />
        <Stack.Screen name="Patient" component={Patient} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

