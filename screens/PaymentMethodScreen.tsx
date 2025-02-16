import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentMethodScreen = () => {
    const navigation = useNavigation();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleAddCard = () => {
    if (cardName && cardNumber && expiryDate && cvv) {
      Alert.alert('Success', 'Your card has been added.');
      navigation.navigate('ChargingInitiatedScreen');
    } else {
      Alert.alert('Error', 'Please fill all card details.');
    }
  };

  const paymentOptions = [
    { id: 'googlePay', label: 'Google Pay', icon: require('../assets/icons/google-pay-icon.png') },
    { id: 'amex', label: 'America Express', icon: require('../assets/icons/amex-icon.png') },
    { id: 'paypal', label: 'PayPal', icon: require('../assets/icons/paypal-icon.png') },
    { id: 'amazon', label: 'Amazon', icon: require('../assets/icons/amazon-icon.png') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Method</Text>
      <Text style={styles.subheader}>Please enter your desired payment method.</Text>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarActive} />
        <View style={styles.progressBarInactive} />
      </View>

      {/* Show payment options only if "Credit / Debit" is not selected */}
      {selectedPaymentMethod !== 'creditCard' && (
        <>
          <Text style={styles.sectionTitle}>Preferred Payment Option</Text>
          <View style={styles.paymentOptionsContainer}>
            {paymentOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.paymentOptionCard,
                  selectedPaymentMethod === option.id && styles.paymentOptionSelected,
                ]}
                onPress={() => setSelectedPaymentMethod(option.id)}
              >
                <Image source={option.icon} style={styles.paymentIcon} />
                <Text style={styles.paymentOptionLabel}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Other Payment Method</Text>
          <TouchableOpacity
            style={styles.paymentOptionCard}
            onPress={() => setSelectedPaymentMethod('creditCard')}
          >
            <Text style={styles.paymentOptionLabel}>Credit / Debit / ATM Card</Text>
          </TouchableOpacity>
        </>
      )}

      {/* Card Form - Show only when "Credit / Debit" is selected */}
      {selectedPaymentMethod === 'creditCard' && (
        <>
          <Text style={styles.label}>Card Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter name on the card"
            value={cardName}
            onChangeText={setCardName}
          />

          <Text style={styles.label}>Card Number</Text>
          <TextInput
            style={styles.input}
            placeholder="0000 0000 0000 0000"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={setCardNumber}
          />

          <View style={styles.row}>
            <View style={styles.halfInputContainer}>
              <Text style={styles.label}>Expiry Date</Text>
              <TextInput
                style={styles.input}
                placeholder="MM/YY"
                keyboardType="numeric"
                value={expiryDate}
                onChangeText={setExpiryDate}
              />
            </View>
            <View style={styles.halfInputContainer}>
              <Text style={styles.label}>CVV</Text>
              <TextInput
                style={styles.input}
                placeholder="000"
                keyboardType="numeric"
                value={cvv}
                onChangeText={setCvv}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleAddCard}>
            <Text style={styles.buttonText}>Add Card ✅</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subheader: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 20,
  },
  progressBarContainer: {
    flexDirection: 'row',
    height: 5,
    borderRadius: 2.5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressBarActive: {
    flex: 1,
    backgroundColor: '#2563EB',
  },
  progressBarInactive: {
    flex: 1,
    backgroundColor: '#E5E7EB',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#111827',
  },
  paymentOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  paymentOptionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  paymentOptionSelected: {
    borderColor: '#2563EB',
    backgroundColor: '#EFF6FF',
  },
  paymentIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  paymentOptionLabel: {
    fontSize: 14,
    color: '#111827',
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInputContainer: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default PaymentMethodScreen;
