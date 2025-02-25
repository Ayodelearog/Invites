import React, { useState } from "react";
import {
	View,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Image,
	Pressable,
} from "react-native";
import CheckBox from "expo-checkbox";
import { useRouter } from "expo-router";
import { Text } from "@/components/Text";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { theme } from "@/components/theme";

export default function ForgotPasswordScreen() {
	const leftArrow = require("@/assets/images/arrow-left.png");

	const router = useRouter();
	const [formData, setFormData] = useState({
		email: "",
	});

	const [errors, setErrors] = useState({
		email: "",
	});

	// State for "Remember me" checkbox
	const [rememberMe, setRememberMe] = useState(false);

	const handleForgotPassword = () => {
		// Add login logic here
		// If login is successful, navigate to the main app
		router.push("/auth/otp-verification");
	};

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
					onPress={() => router.back()}
				>
					<Image
						source={leftArrow}
						style={styles.backIcon}
						resizeMode="contain"
					/>
				</Pressable>

				<View style={styles.header}>
					<Text variant="h4" style={styles.title}>
						Forgot Password?
					</Text>
				</View>

				<View style={styles.form}>
					<Input
						placeholder="Email"
						keyboardType="email-address"
						autoCapitalize="none"
						value={formData.email}
						onChangeText={(text) => setFormData({ ...formData, email: text })}
						error={errors.email}
						icon={require("@/assets/images/email-icon.png")}
					/>
				</View>

				<View style={styles.footer}>
					<Button
						label="Submit"
						variant="primary"
						textColor={theme.colors.white}
						backgroundColor={theme.colors.state.info}
						pressedBackgroundColor="#EAF1FF"
						pressedTextColor="#193E87"
						
						onPress={handleForgotPassword}
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
		right: 0,
		bottom: -190,
	},
	header: {
		marginTop: theme.spacing.md,
	},
	title: {
		marginBottom: 68,
		fontWeight: "bold",
		fontSize: 24,
		color: "#282829",
	},
	subtitle: {
		marginBottom: theme.spacing.lg,
	},
	form: {
		flexDirection: "column",
		gap: 22,
	},
	footer: {
		marginTop: 40,
	},
	// button: {
	// 	marginBottom: theme.spacing.md,
	// },
	backButton: {
		padding: 10,
		borderRadius: 100,
		borderColor: "#CBCCCD",
		borderWidth: 0.5,
		marginTop: 46,
		marginBottom: 20,

		alignSelf: "flex-start",
	},

	backIcon: {
		width: 18, // Adjust based on your design
		height: 18, // Adjust based on your design
	},
});
