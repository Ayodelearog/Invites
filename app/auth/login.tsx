import React, { useState } from "react";
import {
	View,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Image,
} from "react-native";
import CheckBox from "expo-checkbox";
import { useRouter } from "expo-router";
import { Text } from "@/components/Text";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { theme } from "@/components/theme";

export default function LoginScreen() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		password: "",
		phoneNumber: "",
	});

	const [errors, setErrors] = useState({
		fullName: "",
		email: "",
		password: "",
		phoneNumber: "",
	});

	// State for "Remember me" checkbox
	const [rememberMe, setRememberMe] = useState(false);

	const handleLogin = () => {
		// Add login logic here
		// If login is successful, navigate to the main app
		router.push("/home");
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

				<Image
					source={require("@/assets/images/invites-logo.png")}
					style={styles.logo}
					resizeMode="contain"
				/>

				<View style={styles.header}>
					<Text variant="h4" style={styles.title}>
						Welcome Back!
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

					<View
						style={{ flexDirection: "column", justifyContent: "space-between" }}
					>
						<Input
							placeholder="Input Password"
							// secureTextEntry
							value={formData.password}
							onChangeText={(text) =>
								setFormData({ ...formData, password: text })
							}
							error={errors.password}
							icon={require("@/assets/images/padlock-icon.png")}
							secure
						/>

						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								paddingHorizontal: 20,
								alignItems: "center",
								marginTop: 11,
							}}
						>
							<View
								style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
							>
								<CheckBox
									value={rememberMe} 
									color={rememberMe ? theme.colors.state.success : "#CBCCCD"} // Change color
									onValueChange={() => setRememberMe(!rememberMe)} // Toggle state
									style={{ width: 16, height: 16, borderRadius: 4, borderWidth: 1.2 }} // Change size	
								/>
								<Text
									style={{
										fontSize: 11,
										color: "#8D9092",
										fontWeight: "regular",
										opacity: 20,
									}}
								>
									Remember me
								</Text>
							</View>

							<Text
								style={{
									fontSize: 11,
									color: theme.colors.state.success,
									fontWeight: "regular",

									opacity: 20,
								}}
								onPress={() => router.push("/auth/forgot-password")}
							>
								forgot password?
							</Text>
						</View>
					</View>
				</View>

				<View style={styles.footer}>
					<Button
						label="Continue"
						onPress={handleLogin}
						variant="primary"
						textColor={theme.colors.white}
						backgroundColor={theme.colors.state.info}
						pressedBackgroundColor="#EAF1FF"
						pressedTextColor="#193E87"
					/>

					<View style={styles.loginContainer}>
						<Text
							style={{
								fontFamily: "SF-UI Light",
								fontSize: 16,
								color: "#1E2432",
							}}
						>
							Don't have an account?{" "}
						</Text>
						<Text
							style={{
								fontFamily: "SF-UI Light",
								fontSize: 16,
								color: theme.colors.state.error,
							}}
							onPress={() => router.push("/auth/create-account")}
						>
							Sign Up
						</Text>
					</View>
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
		marginTop: theme.spacing.xl,
		// marginBottom: theme.spacing.xl,
		// justifyContent: "center",
		display: "flex",
		alignItems: "center",
	},
	title: {
		marginBottom: 38,
		fontWeight: "bold",
	},
	subtitle: {
		marginBottom: theme.spacing.lg,
	},
	form: {
		flexDirection: "column",
		gap: 22,
	},
	footer: {
		marginTop: 21,
	},
	button: {
		marginBottom: theme.spacing.md,
	},
	loginContainer: {
		marginTop: 141,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 0,
	},
});
