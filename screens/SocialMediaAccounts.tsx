import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';


const SocialMediaAccounts: React.FC = () => {
    const navigation = useNavigation();
  // Connection states for each social media account
  const [connections, setConnections] = useState({
    instagram: false,
    facebook: false,
    linkedin: false,
    twitter: false,
  });

  // Checkbox state for opting out
  const [optOut, setOptOut] = useState(false);

  // Function to toggle connection status
  const toggleConnection = (platform: string) => {
    setConnections((prevConnections) => ({
      ...prevConnections,
      [platform]: !prevConnections[platform],
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: 'https://example.com/logo.png' }} style={styles.logo} />
      <Text style={styles.title}>Social Media Accounts</Text>
      <Text style={styles.description}>
        Connect at least one of your social media accounts to enjoy Maxwell's unique fortune cookie experience, earn rewards and engage with the Maxwell community.
      </Text>

      {/* Instagram Button */}
      <TouchableOpacity
        style={connections.instagram ? styles.connectedButton : styles.button}
        onPress={() => toggleConnection('instagram')}
      >
        <Text style={styles.buttonText}>
          {connections.instagram ? 'Instagram Connected' : 'Connect to Instagram'}
        </Text>
      </TouchableOpacity>

      {/* Facebook Button */}
      <TouchableOpacity
        style={connections.facebook ? styles.connectedButton : styles.facebookButton}
        onPress={() => toggleConnection('facebook')}
      >
        <Text style={styles.buttonText}>
          {connections.facebook ? 'Facebook Connected' : 'Connect to Facebook'}
        </Text>
      </TouchableOpacity>

      {/* LinkedIn Button */}
      <TouchableOpacity
        style={connections.linkedin ? styles.connectedButton : styles.linkedinButton}
        onPress={() => toggleConnection('linkedin')}
      >
        <Text style={styles.buttonText}>
          {connections.linkedin ? 'LinkedIn Connected' : 'Connect to LinkedIn'}
        </Text>
      </TouchableOpacity>

      {/* Twitter Button */}
      <TouchableOpacity
        style={connections.twitter ? styles.connectedButton : styles.twitterButton}
        onPress={() => toggleConnection('twitter')}
      >
        <Text style={styles.buttonText}>
          {connections.twitter ? 'Twitter Connected' : 'Connect to Twitter'}
        </Text>
      </TouchableOpacity>

      {/* Continue Button */}
      <TouchableOpacity
        style={
          Object.values(connections).some((connected) => connected) || optOut
            ? styles.continueButton
            : styles.disabledContinueButton
        }
        disabled={!Object.values(connections).some((connected) => connected) && !optOut}
        onPress={() => navigation.navigate('PaymentMethodScreen')}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      {/* Opt-Out Checkbox Alternative */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setOptOut(!optOut)}
      >
        <View style={styles.customCheckbox}>
          {optOut && <View style={styles.checkboxSelected} />}
        </View>
        <Text style={styles.checkboxText}>
          I do not wish to share my social media accounts and agree to forgo participation in Maxwell’s rewards programs.
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Styles remain the same
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    marginBottom: 8,
  },
  facebookButton: {
    width: '100%',
    backgroundColor: '#1877F2',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    marginBottom: 8,
    padding: 16,
  },
  linkedinButton: {
    width: '100%',
    backgroundColor: '#0077B5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    marginBottom: 8,
    padding: 16,
  },
  twitterButton: {
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    marginBottom: 8,
    padding: 16,
  },
  connectedButton: {
    width: '100%',
    padding: 16,
    backgroundColor: '#DFFFD6',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  continueButton: {
    width: '100%',
    padding: 16,
    backgroundColor: '#1877F2',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  disabledContinueButton: {
    width: '100%',
    padding: 16,
    backgroundColor: '#ddd',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  customCheckbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxSelected: {
    width: 16,
    height: 16,
    backgroundColor: '#007bff',
  },
  checkboxText: {
    fontSize: 14,
  },
});

export default SocialMediaAccounts;
