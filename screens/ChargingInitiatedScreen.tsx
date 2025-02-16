import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ChargingInitiatedScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo/Maxwells-B54.png')} // Replace with actual path to the logo
          style={styles.logo}
        />
        <Text style={styles.logoText}>MAXWELL</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Charging Initiated!</Text>

      {/* Description */}
      <Text style={styles.description}>
        Congratulations! Your account is now active and your charging session has begun.
      </Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Image */}
      <Image
        source={require('../assets/Img/chargingInitiated.png')} // Replace with actual path to the image
        style={styles.image}
      />

      {/* Finish Button */}
      <TouchableOpacity style={styles.finishButton}>
        <Text style={styles.finishButtonText}>Finish ✓</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  logoText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007aff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  divider: {
    height: 2,
    width: '100%',
    backgroundColor: '#007aff',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginBottom: 30,
  },
  finishButton: {
    backgroundColor: '#007aff',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  finishButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ChargingInitiatedScreen;
