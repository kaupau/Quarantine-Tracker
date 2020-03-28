import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/views/splash'
import LoginScreen from './src/views/login'
import RegisterScreen from './src/views/register'
import MyTabs from './src/views/index'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTabs" headerMode="none">
        <Stack.Screen
          name="Splash" component={SplashScreen}
        />
        <Stack.Screen
          name="Login" component={LoginScreen}
        />
        <Stack.Screen
          name="Register" component={RegisterScreen}
        />
        <Stack.Screen
          name="MyTabs" component={MyTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

