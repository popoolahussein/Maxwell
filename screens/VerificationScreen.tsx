import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VerificationScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleVerify = () => {
    navigation.navigate('PersonalInformationForm');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/logo/Maxwells-B54.png')} style={styles.logo} />

      {/* App Name */}
      <Text style={styles.appName}>MAXWELL</Text>

      {/* Title */}
      <Text style={styles.title}>Enter Verification Code</Text>

      {/* Description */}
      <Text style={styles.description}>
        We have just sent you a 4-digit verification code via ezeydesign1@gmail.com
      </Text>

      {/* Input fields for code */}
      <View style={styles.codeContainer}>
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify Now ✓</Text>
      </TouchableOpacity>

      {/* Resend Code */}
      <Text style={styles.resendText}>
        Didn’t you receive any code?{' '}
        <TouchableOpacity>
          <Text style={styles.resendLink}>Resend Code</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: '#fff',
  },
  verifyButton: {
    backgroundColor: '#B0BEC5',
    paddingVertical: 15,
    width: '80%',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  verifyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  resendText: {
    fontSize: 14,
    color: '#666',
  },
  resendLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default VerificationScreen;
