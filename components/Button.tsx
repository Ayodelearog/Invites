import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';
import { theme } from './theme'; 

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  label: string;
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  label,
  style,
  ...props
}: ButtonProps) => {
  const buttonStyles: ViewStyle[] = [
    styles.base,
    styles[variant],
    styles[size],
    style as ViewStyle,
  ];

  const textStyles: TextStyle[] = [
    styles.text,
    styles[`${variant}Text`],
  ];

  return (
    <TouchableOpacity style={buttonStyles} {...props}>
      <Text style={textStyles}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: theme.colors.state.info,
  },
  secondary: {
    backgroundColor: theme.colors.brand.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.brand.primary,
  },
  small: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
  },
  medium: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },
  large: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
  },
  text: {
    fontSize: theme.typography.body.normal.size,
    fontFamily: 'BR-Firma',
  },
  primaryText: {
    color: theme.colors.white,
  },
  secondaryText: {
    color: theme.colors.white,
  },
  outlineText: {
    color: theme.colors.brand.primary,
  },
});