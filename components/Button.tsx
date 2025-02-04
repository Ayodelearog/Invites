import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { theme } from './theme';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  label: string;
  backgroundColor?: string; // custom background color
  textColor?: string; // custom text color
  pressedBackgroundColor?: string; // custom background color when pressed
  pressedTextColor?: string; // custom text color when pressed
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  label,
  style,
  backgroundColor,
  textColor,
  pressedBackgroundColor,
  pressedTextColor,
  ...props
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  // Dynamic styles for background and text color
  const buttonStyles: ViewStyle[] = [
    styles.base,
    styles[variant],
    styles[size],
    backgroundColor ? { backgroundColor } : {},
    style as ViewStyle,
    isPressed ? {
      backgroundColor: pressedBackgroundColor || backgroundColor, // Apply pressed background color
    } : {},
  ];

  const textStyles: TextStyle[] = [
    styles.text,
    styles[`${variant}Text`],
    textColor ? { color: textColor } : {},
    isPressed ? {
      color: pressedTextColor || textColor, // Apply pressed text color
    } : {}
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPressIn={() => setIsPressed(true)} // When pressed
      onPressOut={() => setIsPressed(false)} // When released
      {...props}
    >
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
    paddingHorizontal: 20,
    paddingVertical: 15,
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
