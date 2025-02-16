import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InitialSplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Wait for 2-3 seconds before navigating
    setTimeout(() => {
      navigation.navigate('SplashContainer'); // Navigate to the second splash screen
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Img/maxwell-init.png')}
        style={styles.logo}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#2CA3E5',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});

export default InitialSplashScreen;
