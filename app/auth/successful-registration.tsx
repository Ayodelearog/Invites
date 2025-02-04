import React, { useEffect, useState } from "react";
import {
	View,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Image,
	Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { theme } from "@/components/theme";

export default function SuccessfulRegistrationScreen() {
const closeIcon = require("@/assets/images/close.png");

const router = useRouter();

useEffect(() => {
    const timeout = setTimeout(() => {
        return router.push("/home"); 
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup timeout
}, []);

	return (
		<View
			// behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<ScrollView
				contentContainerStyle={styles.scrollContent}
				showsVerticalScrollIndicator={false}
			>
				<Image
					source={require("@/assets/images/small-ring.png")}
					style={styles.ring}
					resizeMode="contain"
				/>
				<Image
					source={require("@/assets/images/big-ring.png")}
					style={styles.bigRing}
					resizeMode="contain"
				/>

				<Pressable
					style={({ pressed }) => [
						styles.backButton,
						pressed && { opacity: 0.7 },
					]}
					onPress={() => router.push("/home")}
				>
					<Image
						source={closeIcon}
						style={styles.backIcon}
						resizeMode="contain"
					/>
				</Pressable>

                <Text style={styles.header}>Successfully Registered</Text>

				<View style={{width: "100%", flexDirection: "row", justifyContent: "center", marginTop: 56 }}>
					<Image
						source={require("@/assets/images/reg-success.gif")} // Load GIF
						style={styles.gif}
						resizeMode="contain"
					/>
				</View>

				<Text style={styles.paragraph}>
					Congratulations, your account is registered
				</Text>

                <View style={styles.footer}>
					<Button
						label="Homepage"
						textColor={theme.colors.white}
						backgroundColor={theme.colors.state.info}
						variant="primary"
						pressedBackgroundColor="#EAF1FF"
						pressedTextColor="#193E87"
						onPress={() => router.push("/home")}
					/>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,

		height: "100%",
	},
	scrollContent: {
		flexGrow: 1,
		padding: theme.spacing.lg,
		paddingBottom: 32,
	},
	logo: {
		width: 188,
		height: 69,
		alignSelf: "center",
		marginTop: 107,
		marginBottom: 56,
	},
	ring: {
		width: 172,
		height: 172,
		position: "absolute",
		right: 30,
		top: -20,
	},
	bigRing: {
		width: 594,
		height: 594,
		position: "absolute",
		left: 0,
		bottom: -260,
        transform: [{ rotate: "230deg" }],
	},
	header: {
		marginTop: theme.spacing.md,
        alignSelf: "center",
        fontWeight: "medium",
        fontSize: 24,
        fontFamily: "BR Firma Medium",
	},
	paragraph: {
        marginTop: 67,
		marginBottom: 68,
		fontWeight: "medium",
		fontSize: 14,
		color: theme.colors.black[1],
        width: "100%",
        textAlign: "center",
        lineHeight: 20,
        
	},

	backButton: {
		padding: 10,
		borderRadius: 100,
		borderColor: "#CBCCCD",
		borderWidth: 0.5,
		marginTop: 46,
		marginBottom: 20,

		alignSelf: "flex-end",
	},

	backIcon: {
		width: 18, 
		height: 18, 
	},
    gif: {
		width: 150,
		height: 150,
		
	},
    footer: {
        marginTop: "auto",
    }
});
