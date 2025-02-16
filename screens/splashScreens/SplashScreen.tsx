import React, { useState, useRef } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Welcome to Maxwell!',
    subtitle: 'Next Level EV Charging',
    description: 'Maxwell connects you to your region’s fastest EV charging stations and offers an experiential fortune cookie with each new charging session.',
    image: require('../../assets/Img/splash1.png'),
  },
  {
    id: '2',
    title: 'Charge Faster',
    subtitle: 'Find and charge at the fastest stations',
    description: 'Locate the fastest EV charging stations in your area and save time with real-time status updates.',
    image: require('../../assets/splashg.png'),
  },
];

const SplashScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setCurrentSlide(slideIndex);
  };

  const handleNext = () => {
    if (scrollViewRef.current && currentSlide < slides.length - 1) {
      scrollViewRef.current.scrollTo({ x: (currentSlide + 1) * screenWidth, animated: true });
    }
  };

  const handleSkip = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: (slides.length - 1) * screenWidth, animated: true });
    }
  };

  const renderSlide = (slide: any) => (
    <ImageBackground key={slide.id} source={slide.image} style={styles.slide}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{slide.title}</Text>
        <Text style={styles.subtitle}>{slide.subtitle}</Text>
        <Text style={styles.description}>{slide.description}</Text>
      </View>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map(renderSlide)}
      </ScrollView>

      <View style={styles.paginationContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.paginationDot, currentSlide === index && styles.paginationDotActive]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        {currentSlide === slides.length - 1 ? (
          <View style={styles.authButtons}>
            <Text style={styles.buttonText}>Login</Text>
            <Text style={styles.buttonText}>Sign Up</Text>
          </View>
        ) : (
          <Text style={styles.nextButton} onPress={handleNext}>
            Next
          </Text>
        )}
        <Text style={styles.skipButton} onPress={handleSkip}>
          Skip
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: screenWidth,
    height: '100%',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ddd',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#aaa',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  nextButton: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipButton: {
    color: '#007bff',
    fontSize: 16,
  },
  authButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default SplashScreen;
