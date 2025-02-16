import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUp = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordStrength, setShowPasswordStrength] = useState(false);

  // Validation flags
  const isMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUpperLower = /[a-z]/.test(password) && /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // Check if all validations pass
  const isValidForm =
    fullName && username && email && isMinLength && hasNumber && hasUpperLower && hasSpecialChar && password === confirmPassword;

  return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.inactiveTab}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.activeTab}>Sign Up</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Welcome to Maxwell!</Text>
      <Text style={styles.subtitle}>Sign up below to create your account and start exploring nearby EV charging stations.</Text>

      {/* Social Sign-Up Buttons */}
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Sign up with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Sign up with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Sign up with Apple</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or continue with email</Text>

      {/* Input Fields */}
      <TextInput style={styles.input} placeholder="Enter your full name" value={fullName} onChangeText={setFullName} />
      <TextInput style={styles.input} placeholder="Enter your username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        onFocus={() => setShowPasswordStrength(true)}
      />
      <TextInput style={styles.input} placeholder="Confirm your password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />

      {/* Password Strength Indicators (Initially hidden) */}
      {showPasswordStrength && (
        <View style={styles.passwordStrengthContainer}>
          <Text style={styles.passwordRule}>
            <Text style={[styles.checkbox, isMinLength ? styles.validCheckbox : styles.invalidCheckbox]}>■</Text> At least 8 characters
          </Text>
          <Text style={styles.passwordRule}>
            <Text style={[styles.checkbox, hasNumber ? styles.validCheckbox : styles.invalidCheckbox]}>■</Text> At least 1 number
          </Text>
          <Text style={styles.passwordRule}>
            <Text style={[styles.checkbox, hasUpperLower ? styles.validCheckbox : styles.invalidCheckbox]}>■</Text> Both upper and lower case letter
          </Text>
          <Text style={styles.passwordRule}>
            <Text style={[styles.checkbox, hasSpecialChar ? styles.validCheckbox : styles.invalidCheckbox]}>■</Text> At least 1 special character
          </Text>
        </View>
      )}

      {/* Continue Button */}
      <TouchableOpacity
  style={[styles.continueButton, isValidForm ? styles.activeButton : styles.inactiveButton]}
  disabled={!isValidForm}
  onPress={() => {
    if (isValidForm) {
      navigation.navigate('VerificationScreen');
    }
  }}
>
  <Text style={styles.continueButtonText}>Continue →</Text>
</TouchableOpacity>

      {/* Terms and Privacy */}
      <Text style={styles.termsText}>
        By signing up, you agree to our <Text style={styles.linkText}>Terms of service</Text> and <Text style={styles.linkText}>Privacy policy</Text>
      </Text>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#fff' },
  tabContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  activeTab: { fontSize: 18, fontWeight: 'bold', borderBottomWidth: 2, borderBottomColor: '#000', paddingBottom: 5 },
  inactiveTab: { fontSize: 18, color: '#999', paddingBottom: 5, marginHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 14, textAlign: 'center', color: '#666', marginBottom: 20 },
  socialButton: { backgroundColor: '#e5e5e5', padding: 15, borderRadius: 5, marginBottom: 10, alignItems: 'center' },
  socialButtonText: { fontSize: 16, fontWeight: 'bold' },
  orText: { textAlign: 'center', color: '#666', marginVertical: 15 },
  input: { borderColor: '#ccc', borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 10 },
  passwordStrengthContainer: { marginVertical: 10 },
  passwordRule: { color: '#999', fontSize: 12, marginBottom: 5 },
  validCheckbox: { color: 'green', fontWeight: 'bold' },
  invalidCheckbox: { color: '#999', fontWeight: 'bold' },
  checkbox: { fontSize: 14, marginRight: 5 },
  continueButton: { padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 20 },
  activeButton: { backgroundColor: '#007BFF' },
  inactiveButton: { backgroundColor: '#ccc' },
  continueButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  termsText: { textAlign: 'center', fontSize: 12, color: '#666', marginTop: 20 },
  linkText: { color: '#007BFF', textDecorationLine: 'underline' },
});

export default SignUp;
