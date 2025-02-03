import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Text } from '@/components/Text';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { theme } from '@/components/theme';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Add logic to send password reset email
    // Then navigate to the reset password screen
    // router.push('/auth/reset-password');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text variant="h2" style={styles.title}>Forgot Password?</Text>
        <Text variant="medium" color={theme.colors.gray[3]} style={styles.subtitle}>
          Enter your email to reset your password
        </Text>

        <Input
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Button
          label="Submit"
          onPress={handleSubmit}
          style={styles.submitButton}
        />

        <Text
          variant="normal"
          color={theme.colors.brand.primary}
          style={styles.backToLogin}
          onPress={() => router.back()}
        >
          Back to Login
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1,
    padding: theme.spacing.lg,
    justifyContent: 'center',
  },
  title: {
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    marginBottom: theme.spacing.xl,
  },
  submitButton: {
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
  },
  backToLogin: {
    textAlign: 'center',
  },
});