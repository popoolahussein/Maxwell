import React from 'react';
import { View, StyleSheet, ImageBackground, StatusBar, TouchableOpacity, Image, Pressable, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface SplashScreenProps {
  onNext: () => void;
}

const SplashScreen1: React.FC<SplashScreenProps> = ({ onNext }) => (
  <View style={styles.container}>
    <ImageBackground source={require('../../assets/Img/splash1.png')} style={styles.backgroundImage}>
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
    </ImageBackground>
    <StatusBar barStyle="light-content" />

    <View style={styles.subContainer}>
    <View style={styles.subStatus}>
    <Image style={styles.statusLogo} source={require('../../assets/logo/Maxwells-B54.png')} />
    <TouchableOpacity>
      <Text style={styles.statusText}>skip</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.introBox}>
      <Text style={styles.introText1}>
      Welcome to Maxwell!
      </Text>
      <Text style={styles.introText2}>Next Level EV Charging</Text>
      <Text style={styles.introText3}>Maxwell connects you to your region’s fastest EV charging stations and offers a “experiential fortune cookie” with each new charging session.</Text>
    </View>
    <View style={styles.slideIndicatorBox}>
    <Pressable style={styles.button}>
    <Image source={require('../../assets/indicators/indicator-a1.png')}  />
    </Pressable>
    <TouchableOpacity style={styles.button} onPress={onNext}>
      <Image source={require('../../assets/indicators/indicator-a.png')} style={styles.buttonImage} />
    </TouchableOpacity>
    </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    position: 'absolute',
    top: 1,
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
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  statusLogo: {
    width: 102,
    height: 40,
    flexShrink: 0,
  },
  statusText: {
    color: '#FCFCFD',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  introBox: {
    marginTop: 326,
    gap: 16,
  },
  introText1: {
    color: '#FCFCFD',
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
    fontFamily: 'inter',
  },
  introText2: {
    color: '#FCFCFD',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    fontFamily: 'inter',
  },
  introText3: {
    color: '#FCFCFD',
    fontSize: 16,
    fontWeight: 400,
    textAlign: 'center',
    fontFamily: 'inter',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideIndicatorBox: {
    flex: 1,
    width: '100%',
    marginTop: 32,
    flexDirection: 'column',
    gap: 112,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonImage: {
    width: 70,
    height: 70,
  },
});

export default SplashScreen1;
