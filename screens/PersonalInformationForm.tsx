import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const PersonalInfoForm: React.FC = () => {
  const navigation = useNavigation();
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activities, setActivities] = useState<string[]>(['']);
  const [restaurants, setRestaurants] = useState<string[]>(['']);

  const handleAddActivity = () => {
    setActivities([...activities, '']);
  };

  const handleAddRestaurant = () => {
    setRestaurants([...restaurants, '']);
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDateOfBirth(selectedDate);
    }
  };

  const isFormValid = dateOfBirth && phoneNumber && activities.every(a => a) && restaurants.every(r => r);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Personal Information</Text>
      <Text style={styles.subtitle}>Please tell us a little more about yourself.</Text>

      {/* Date of Birth */}
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.inputText}>{dateOfBirth ? dateOfBirth.toDateString() : 'dd/mm/yyyy'}</Text>
      </TouchableOpacity>
      <Text style={styles.helperText}>Please enter your date of birth.</Text>
      {showDatePicker && (
        <DateTimePicker
          value={dateOfBirth || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}

      {/* Phone Number */}
      <TextInput
        style={styles.inputContainer}
        placeholder="+1 (903) 326 7104"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}/>
      <Text style={styles.helperText}>Enter your phone number.</Text>

      {/* Activities */}
      <Text style={styles.sectionTitle}>To participate in our rewards program, please tell us your three favorite things to do to relax.</Text>
      {activities.map((activity, index) => (
        <TextInput
          key={index}
          style={styles.inputContainer}
          placeholder="Write here"
          value={activity}
          onChangeText={(text) => {
            const updatedActivities = [...activities];
            updatedActivities[index] = text;
            setActivities(updatedActivities);
          }}
        />
      ))}
      <TouchableOpacity onPress={handleAddActivity}>
        <Text style={styles.addMoreText}>Add More</Text>
      </TouchableOpacity>

      {/* Restaurants */}
      <Text style={styles.sectionTitle}>To participate in our rewards program, please tell us your three favorite restaurants.</Text>
      {restaurants.map((restaurant, index) => (
        <TextInput
          key={index}
          style={styles.inputContainer}
          placeholder="Write here"
          value={restaurant}
          onChangeText={(text) => {
            const updatedRestaurants = [...restaurants];
            updatedRestaurants[index] = text;
            setRestaurants(updatedRestaurants);
          }}
        />
      ))}
      <TouchableOpacity onPress={handleAddRestaurant}>
        <Text style={styles.addMoreText}>Add More</Text>
      </TouchableOpacity>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, { backgroundColor: isFormValid ? '#007bff' : '#d3d3d3' }]}
        disabled={!isFormValid}
        onPress={() => navigation.navigate('SocialMediaAccounts')} 
      >
        <Text style={styles.continueText}>Continue →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#fff',
  },
  inputText: {
    fontSize: 16,
    color: '#666',
  },
  helperText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  addMoreText: {
    color: '#007bff',
    fontWeight: 'bold',
    marginTop: 8,
  },
  continueButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PersonalInfoForm;
