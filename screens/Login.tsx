// Login.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login submitted', { email, password });
  };

  return (
    <KeyboardAwareScrollView>
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/logo/intro-logo.png')} style={styles.logo} />
      </View>
      <View style={styles.introText}>
      <Text style={styles.headerText}>Welcome back!</Text>
      <Text style={styles.subText}>Log in below to access your account and easily find nearby EV charging stations.</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity>
          <View>
          <Text style={styles.activeTab}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.inactiveTab}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Social Login Buttons */}
      <TouchableOpacity style={styles.socialButton}><Text style={styles.socialText}>Sign in with Google</Text></TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}><Text style={styles.socialText}>Sign in with Facebook</Text></TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}><Text style={styles.socialText}>Sign in with Apple</Text></TouchableOpacity>

      <Text style={styles.orText}>Or continue with email</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  logo: {
    width: 170.85,
    height: 66,
    alignSelf: 'center',
    marginTop: 80,
  },
  introText: {
    marginVertical: 32,
    gap: 16,
  },
    headerText: { 
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: { 
    textAlign: 'center', 
    color: '#555'
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  activeTab: {
    fontWeight: 'bold', 
    fontSize: 18,
    color: '#007BFF',
  },
  inactiveTab: {
    fontSize: 18, 
  },
  socialButton: { padding: 15, backgroundColor: '#ccc', borderRadius: 5, marginVertical: 5, alignItems: 'center' },
  socialText: { color: '#000' },
  orText: { textAlign: 'center', marginVertical: 10 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 5, padding: 10, marginBottom: 15 },
  forgotPassword: { alignItems: 'flex-end', marginBottom: 20 },
  forgotText: { color: '#007BFF' },
  button: { backgroundColor: '#007BFF', padding: 15, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default Login;
