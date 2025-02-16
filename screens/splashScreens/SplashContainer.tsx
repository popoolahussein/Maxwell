import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import SplashScreen1 from './SplashScreen1';
import SplashScreen2 from './SplashScreen2';
import SplashScreen3 from './SplashScreen3';
import SplashScreen4 from './SplashScreen4';
import SplashScreen5 from './SplashScreen5';
import LastSplash from './LastSplash';

interface SplashContainerProps {
  navigation: any; // Adjust this type if using a more specific navigation type
}

const SplashContainer: React.FC<SplashContainerProps> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < screens.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('Login'); // Navigate to Login after the last splash
    }
  };

  const screens = [
    <SplashScreen1 onNext={handleNext} />,
    <SplashScreen2 onNext={handleNext} />,
    <SplashScreen3 onNext={handleNext} />,
    <SplashScreen4 onNext={handleNext} />,
    <SplashScreen5 onNext={handleNext} />,
    <LastSplash onNext={() => navigation.navigate('Login')} />,
  ];

  return (
    <FlatList
      data={screens}
      horizontal
      pagingEnabled
      renderItem={({ item }) => <View style={styles.screen}>{item}</View>}
      keyExtractor={(_, index) => index.toString()}
      scrollEnabled
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={(event) => {
        const newIndex = Math.floor(
          event.nativeEvent.contentOffset.x / Dimensions.get('window').width
        );
        setCurrentIndex(newIndex);

        // Optional: Navigate directly if LastSplash is reached
        if (newIndex === screens.length - 1) {
          navigation.navigate('Login');
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
});

export default SplashContainer;
