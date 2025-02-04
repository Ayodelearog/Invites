import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
  Animated,
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
  const [bgColor, setBgColor] = useState(new Animated.Value(0)); // For background color animation
  const [txtColor, setTxtColor] = useState(new Animated.Value(0)); // For text color animation

  // Animated background color and text color interpolation
  const animatedBgColor = bgColor.interpolate({
    inputRange: [0, 1],
    outputRange: [
      backgroundColor || theme.colors.state.info, // Normal background color
      pressedBackgroundColor || backgroundColor || theme.colors.state.info, // Pressed background color
    ],
  });

  const animatedTxtColor = txtColor.interpolate({
    inputRange: [0, 1],
    outputRange: [
      textColor || theme.colors.white, // Normal text color
      pressedTextColor || textColor || theme.colors.white, // Pressed text color
    ],
  });

  // Dynamic styles for background and text color
  const buttonStyles: ViewStyle[] = [
    styles.base,
    styles[variant],
    styles[size],
    { backgroundColor: animatedBgColor as unknown as string }, // Cast to string
    style && style, // Only include style if it's defined
  ].filter(Boolean); // Remove undefined values

  const textStyles: TextStyle[] = [
    styles.text,
    styles[`${variant}Text`],
    { color: animatedTxtColor as unknown as string }, // Cast to string
  ];

  const onPressInHandler = () => {
    setIsPressed(true);
    Animated.timing(bgColor, {
      toValue: 1,
      duration: 200, // Duration of the color change animation
      useNativeDriver: false, // Set to false for non-layout properties
    }).start();
    Animated.timing(txtColor, {
      toValue: 1,
      duration: 200, // Duration of the color change animation
      useNativeDriver: false, // Set to false for non-layout properties
    }).start();
  };

  const onPressOutHandler = () => {
    setIsPressed(false);
    Animated.timing(bgColor, {
      toValue: 0,
      duration: 200, // Duration of the color change animation
      useNativeDriver: false, // Set to false for non-layout properties
    }).start();
    Animated.timing(txtColor, {
      toValue: 0,
      duration: 200, // Duration of the color change animation
      useNativeDriver: false, // Set to false for non-layout properties
    }).start();
  };

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPressIn={onPressInHandler} // When pressed
      onPressOut={onPressOutHandler} // When released
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
