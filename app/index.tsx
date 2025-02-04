import React from "react";
import { useEffect, useRef } from "react";
import { View, StyleSheet, Image, Animated } from "react-native";
import { useRouter } from "expo-router";
import { theme } from "@/components/theme";

export default function SplashScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Reset animated values
    fadeAnim.setValue(0);
    pulseAnim.setValue(1);

    // Fade in animation
    const fadeInAnimation = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });

    // Pulsing animation
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 0.8,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    );

    fadeInAnimation.start();
    pulseAnimation.start();

    const timer = setTimeout(() => {
      router.replace("/auth/create-account");
    }, 3000); // Increased to 5 seconds to show the animation

    return () => {
      clearTimeout(timer);
      fadeInAnimation.stop(); // Stop the fade animation
      pulseAnimation.stop(); // Stop the pulse animation
    };
  }, [fadeAnim, pulseAnim, router]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/small-ring.png")} style={styles.ring} resizeMode="contain" />
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: pulseAnim }],
          },
        ]}
      >
        <Image source={require("../assets/images/invites-logo.png")} style={styles.logo} resizeMode="contain" />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  ring: {
    width: 172,
    height: 172,
    position: "absolute",
    right: 50,
    top: 0,
  },
  logoContainer: {
    width: "60%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
});