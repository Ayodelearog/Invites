import React from 'react'
import { Text as RNText, type TextProps as RNTextProps, StyleSheet } from "react-native"
import { theme } from './theme' 

interface TextProps extends RNTextProps {
  variant?: keyof typeof theme.typography.body | keyof typeof theme.typography.heading
  color?: string
  weight?: "regular" | "medium" | "bold"
}

export const Text = ({
  variant = "normal",
  color = theme.colors.black[1],
  weight = "regular",
  style,
  ...props
}: TextProps) => {
  const variantStyle = variant.startsWith("h")
    ? theme.typography.heading[variant as keyof typeof theme.typography.heading]
    : theme.typography.body[variant as keyof typeof theme.typography.body]

  return (
    <RNText
      style={[
        styles.base,
        {
          fontFamily: theme.fonts[weight],
          fontSize: variantStyle.size,
          lineHeight: variantStyle.lineHeight,
          color,
        },
        style,
      ]}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  base: {
    // Base styles if needed
  },
})

