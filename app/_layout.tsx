import { useEffect } from "react"
import { useFonts } from "expo-font"
import { SplashScreen, Stack } from "expo-router"
import * as Font from "expo-font"

// Assuming your fonts are in the assets/fonts directory
const customFonts = {
  "BR Firma": require("../assets/fonts/br-firma/BR Firma Regular.otf"),
  "BR Firma Medium": require("../assets/fonts/br-firma/BR Firma Medium.otf"),
  "BR Firma Bold": require("../assets/fonts/br-firma/BR Firma Bold.otf"),
  "SF-UI Light": require("../assets/fonts/sf-ui/sf-ui-display-light.otf"),
}

export default function Layout() {
  const [fontsLoaded] = useFonts(customFonts)

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(customFonts)
      } catch (e) {
        console.warn(e)
      } finally {
        if (fontsLoaded) {
          SplashScreen.hideAsync()
        }
      }
    }

    prepare()
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return <Stack screenOptions={{ headerShown: false }} />
}

