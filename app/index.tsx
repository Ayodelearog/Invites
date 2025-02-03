import { useEffect, useRef } from "react"
import { View, StyleSheet, Image, Animated } from "react-native"
import { useRouter } from "expo-router"
import { theme } from "@/components/theme" 

export default function SplashScreen() {
  const router = useRouter()
  const fadeAnim = useRef(new Animated.Value(0)).current
  const pulseAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()

    // Pulsing animation
    Animated.loop(
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
    ).start()

    const timer = setTimeout(() => {
      router.replace("/auth/create-account")
    }, 5000) // Increased to 5 seconds to show the animation

    return () => clearTimeout(timer)
  }, [fadeAnim, pulseAnim, router])

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
      {/* <View style={styles.loadingDot} /> */}
    </View>
  )
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
  loadingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.brand.primary,
    position: "absolute",
    bottom: "15%",
  },
})

