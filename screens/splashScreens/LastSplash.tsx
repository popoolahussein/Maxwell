import React from 'react';
import { View, StyleSheet, ImageBackground, StatusBar, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
type RootStackParamList = {
  SplashContainer: undefined;
  Login: undefined;
  SignUp: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'SplashContainer'>;

const LastSplash: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/Img/splash6.png')} style={styles.backgroundImage}>
        </ImageBackground>
        <LinearGradient
        colors={['rgba(16, 24, 40, 0.8)', 'rgba(16, 24, 40, 0)']}
        style={styles.gradientOverlayOnboarding}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.7 }}
      />
      
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(16, 24, 40, 0.8)']}
        style={styles.gradientOverlayOverlay}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.7 }}
      />
      <StatusBar barStyle="light-content" />

      <View style={styles.subContainer}>
        <View style={styles.subStatus}>
          <Image style={styles.statusLogo} source={require('../../assets/logo/Maxwells-B54.png')} />
        </View>
        <View style={styles.introBox}>
          <Text style={styles.introText1}>Welcome to Maxwell!</Text>
          <Text style={styles.introText2}>Next Level EV Charging</Text>
          <Text style={styles.introText3}>
            Maxwell connects you to your region’s fastest EV charging stations and offers a
            “experiential fortune cookie” with each new charging session.
          </Text>
        </View>
        <View style={styles.signBox}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    position: 'absolute',
    top: 1,
    width: '100%',
  },
  gradientOverlayOnboarding: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  gradientOverlayOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  subStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
    alignItems: 'center',
  },
  statusLogo: {
    width: 102,
    height: 40,
  },
  introBox: {
    marginTop: 326,
    gap: 16,
    paddingHorizontal: 16,
  },
  introText1: {
    color: '#FCFCFD',
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  introText2: {
    color: '#FCFCFD',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  introText3: {
    color: '#FCFCFD',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 10,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  signBox: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#FCFCFD',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LastSplash;
