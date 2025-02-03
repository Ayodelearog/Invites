import React, { useState } from "react";
import {
	TextInput,
	View,
	StyleSheet,
	TextInputProps,
	Image,
	ImageSourcePropType,
	TouchableOpacity,
} from "react-native";
import { theme } from "./theme";
import { Text } from "./Text";

interface InputProps extends TextInputProps {
	label?: string;
	error?: string;
	icon?: ImageSourcePropType;
	placeholder?: string;
	secure?: boolean; // New prop for password input
}

export const Input = ({
	label,
	error,
	style,
	icon,
	placeholder,
	secure,
	...props
}: InputProps) => {
	const [isSecure, setIsSecure] = useState(secure); // Manage password visibility

	return (
		<View style={styles.container}>
			{label && (
				<Text variant="small" style={styles.label}>
					{label}
				</Text>
			)}
			<View style={styles.iconInputWrapper}>
				<TextInput
					style={[
						styles.input,
						error && styles.inputError,
						style,
						{ paddingLeft: icon ? 48 : 16, paddingRight: secure ? 48 : 16 },
					]}
					placeholderTextColor={"#ACB1C0"}
					placeholder={placeholder}
					secureTextEntry={isSecure} // Toggle password visibility
					{...props}
				/>
				{icon && <Image source={icon} style={styles.icon} resizeMode="contain" />}
				{secure && (
					<TouchableOpacity
						onPress={() => setIsSecure(!isSecure)}
						style={styles.eyeIcon}
					>
						<Image
							source={
								isSecure
									? require("@/assets/images/eye-closed.png") // Closed eye icon
									: require("@/assets/images/eye.png") // Open eye icon
							}
							style={styles.icon}
							resizeMode="contain"
						/>
					</TouchableOpacity>
				)}
			</View>
			{error && (
				<Text variant="small" color={theme.colors.state.error} style={styles.error}>
					{error}
				</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	label: {
		marginBottom: theme.spacing.xs,
	},
	input: {
		width: "100%",
		borderWidth: 1,
		borderColor: "rgba(51, 51, 51, 0.2)",
		borderRadius: theme.borderRadius.xl,
		paddingVertical: 20,
		fontSize: theme.typography.body.normal.size,
		color: theme.colors.black[1],
		fontWeight: "500",
	},
	inputError: {
		borderColor: theme.colors.state.error,
	},
	error: {
		marginTop: theme.spacing.xs,
	},
	icon: {
		position: "absolute",
		width: 20,
		height: 20,
		marginLeft: 16,
	},
	eyeIcon: {
		position: "absolute",
		right: 18,
		width: 20,
		height: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	iconInputWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
});
