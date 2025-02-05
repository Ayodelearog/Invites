import React, { useState, useRef } from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	Pressable,
	Image,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { theme } from "@/components/theme";

export default function OTPVerificationScreen() {
	const router = useRouter();
	const { email } = useLocalSearchParams();
	const [otp, setOtp] = useState(["", "", "", ""]);
	const otpInputRefs = useRef<(TextInput | null)[]>([]);
	const leftArrow = require("@/assets/images/arrow-left.png");

	const handleVerify = () => {
		// Add OTP verification logic here
		// If verification is successful, navigate to the main app
		router.push("/auth/reset-password");
	};

	const handleResend = () => {
		// Add logic to resend OTP
	};

	const handleOtpChange = (text: string, index: number) => {
		const newOtp = [...otp];
		newOtp[index] = text;

		// Update the OTP state
		setOtp(newOtp);

		// Auto-focus to the next input if a digit is entered
		if (text && index < otp.length - 1) {
			otpInputRefs.current[index + 1]?.focus();
		}

		// Auto-submit if the last digit is entered
		if (index === otp.length - 1 && text) {
			handleVerify();
		}
	};

	const handleOtpKeyPress = (event: any, index: number) => {
		// Handle backspace to move focus to the previous input
		if (event.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
			otpInputRefs.current[index - 1]?.focus();
		}
	};

	return (
		<View style={styles.container}>
			<Image
				source={require("@/assets/images/small-ring.png")}
				style={styles.ring}
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
			<Text variant="h2" style={styles.title}>
				Verify Code
			</Text>
			<Text
				variant="medium"
				color={theme.colors.gray[3]}
				style={styles.subtitle}
			>
				The confirmation code was sent via email
				{"\n"}
				{email}
			</Text>

			<View style={styles.otpContainer}>
				{otp.map((digit, index) => (
					<TextInput
						key={index}
						ref={(ref) => (otpInputRefs.current[index] = ref)}
						style={[styles.otpInput, digit ? styles.otpInputFilled : null]}
						value={digit}
						onChangeText={(text) => handleOtpChange(text, index)}
						onKeyPress={(event) => handleOtpKeyPress(event, index)}
						keyboardType="number-pad"
						maxLength={1}
						textAlign="center"
						autoFocus={index === 0}
					/>
				))}
			</View>

			<TouchableOpacity onPress={handleResend} style={styles.resendContainer}>
				<Text variant="normal" color={theme.colors.gray[3]}>
					Don't get the code?{" "}
					<Text color={theme.colors.brand.primary}>Resend</Text>
				</Text>
			</TouchableOpacity>

			<Button
				label="Verify Now"
				onPress={handleVerify}
				style={styles.verifyButton}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		padding: theme.spacing.lg,
	},
	title: {
		// marginTop: theme.spacing.xl,
		marginBottom: theme.spacing.sm,
		fontWeight: "medium",
		fontSize: 24,
	},
	subtitle: {
		marginBottom: 32,
	},
	otpContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 38,
	},
	otpInput: {
		width: 64,
		height: 64,
		borderWidth: 1,
		borderColor: theme.colors.gray[5],
		borderRadius: theme.borderRadius.md,
		justifyContent: "center",
		alignItems: "center",
		fontSize: 24,
		fontWeight: "bold",
	},
	otpInputFilled: {
		borderColor: "#3D5BF6",
	},
	resendContainer: {
		alignItems: "center",
		// marginBottom: theme.spacing.xl,
	},
	verifyButton: {
		marginTop: 50,
	},
	backButton: {
		padding: 10,
		borderRadius: 100,
		borderColor: "#CBCCCD",
		borderWidth: 0.5,
		marginTop: 46,
		marginBottom: 24,

		alignSelf: "flex-start",
	},

	backIcon: {
		width: 18, // Adjust based on your design
		height: 18, // Adjust based on your design
	},
	ring: {
		width: 172,
		height: 172,
		position: "absolute",
		right: 30,
		top: -20,
	},
});
