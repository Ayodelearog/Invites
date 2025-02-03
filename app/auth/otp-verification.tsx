import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import { theme } from '@/components/theme';

export default function OTPVerificationScreen() {
  const router = useRouter();
  const { email } = useLocalSearchParams();
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleVerify = () => {
    // Add OTP verification logic here
    // If verification is successful, navigate to the main app
    router.push('/');
  };

  const handleResend = () => {
    // Add logic to resend OTP
  };

  return (
    <View style={styles.container}>
      <Text variant="h2" style={styles.title}>Verify Code</Text>
      <Text variant="medium" color={theme.colors.gray[3]} style={styles.subtitle}>
        The confirmation code was sent via email
        {'\n'}
        {email}
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.otpInput, digit ? styles.otpInputFilled : null]}
            onPress={() => {/* Handle input focus */}}
          >
            <Text variant="h2" style={styles.otpDigit}>{digit}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity onPress={handleResend} style={styles.resendContainer}>
        <Text variant="normal" color={theme.colors.gray[3]}>
          Don't get the code? <Text color={theme.colors.brand.primary}>Resend</Text>
        </Text>
      </TouchableOpacity>

      <Button
        label="Verify Now"
        onPress={handleVerify}
        style={styles.verifyButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: theme.spacing.lg,
  },
  title: {
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    marginBottom: theme.spacing.xl,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
  },
  otpInput: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: theme.colors.gray[5],
    borderRadius: theme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpInputFilled: {
    borderColor: theme.colors.brand.primary,
  },
  otpDigit: {
    fontSize: 24,
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  verifyButton: {
    marginTop: 'auto',
  },
});