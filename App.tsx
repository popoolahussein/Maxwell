import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/splashScreens/SplashScreen';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import VerificationScreen from './screens/VerificationScreen';
import PersonalInformationForm from './screens/PersonalInformationForm';
import SocialMediaAccounts from './screens/SocialMediaAccounts';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import ChargingInitiatedScreen from './screens/ChargingInitiatedScreen';
import InitialSplashScreen from './screens/splashScreens/InitialSplashScreen';
import SplashContainer from './screens/splashScreens/SplashContainer';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="InitialSplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="InitialSplashScreen" component={InitialSplashScreen} />
        <Stack.Screen name="SplashContainer" component={SplashContainer} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
        <Stack.Screen name="PersonalInformationForm" component={PersonalInformationForm} />
        <Stack.Screen name="SocialMediaAccounts" component={SocialMediaAccounts} />
        <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />
        <Stack.Screen name="ChargingInitiatedScreen" component={ChargingInitiatedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
