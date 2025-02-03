import React, { useState } from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
	Image,
} from "react-native";
import { useRouter } from "expo-router";
import { Text } from "@/components/Text";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { theme } from "@/components/theme";

export default function CreateAccountScreen() {
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

	const handleCreateAccount = () => {
		// Add validation logic here
		// If validation passes, navigate to OTP verification
		router.push({
			pathname: "/auth/otp-verification",
			params: { email: formData.email },
		});
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
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
						Create Account
					</Text>
					
				</View>

				<View style={styles.form}>
					<Input
						placeholder="Name"
						value={formData.fullName}
						onChangeText={(text) =>
							setFormData({ ...formData, fullName: text })
						}
						error={errors.fullName}
						icon={require("@/assets/images/profile-Icon.png")}
					/>

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
								gap: 5,
								paddingLeft: 20,
								alignItems: "center",
								marginTop: 5,
							}}
						>
							<View
								style={{
									width: 7,
									height: 7,
									backgroundColor: `${
										formData.password.length > 8 || !formData.password
											? "#ACB1C0"
											: theme.colors.state.error
									}`,
									borderRadius: "100%",
								}}
							></View>
							<Text
								style={{
									fontSize: 11,
									color: `${
										formData.password.length > 8 || !formData.password
											? "#ACB1C0"
											: theme.colors.state.error
									}`,
									fontWeight: "regular",

									opacity: 20,
								}}
							>
								Mininmum of 8 characters
							</Text>
						</View>
					</View>

					<Input
						placeholder="Phone"
						// secureTextEntry
						value={formData.phoneNumber}
						onChangeText={(text) =>
							setFormData({ ...formData, phoneNumber: text })
						}
						error={errors.phoneNumber}
						icon={require("@/assets/images/phone-icon.svg")}
					/>
				</View>

				<View style={styles.footer}>
					<Button
						label="Sign Up"
						onPress={handleCreateAccount}
						style={styles.button}
					/>

					<View style={styles.loginContainer}>
						<Text style={{fontFamily: "SF-UI Light", fontSize: 16,  color: "#1E2432"}}>
							Already have an account?{" "}
						</Text>
						<Text
							style={{fontFamily: "SF-UI Light", fontSize: 16,  color: theme.colors.state.error}}
							onPress={() => router.push("/auth/login")}
						>
							Login
						</Text>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
	},
	scrollContent: {
		flexGrow: 1,
		padding: theme.spacing.lg,
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
		right: 50,
		top: -20,
	},
	bigRing: {
		width: 594,
		height: 594,
		position: "absolute",
		right: 0,
		bottom: 0,
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
		gap: 6,
	},
	footer: {
		marginTop: 29,
	},
	button: {
		marginBottom: theme.spacing.md,
	},
	loginContainer: {
		marginTop: 51,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
    
	},
});
