import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Perfil } from "./src/pages/Perfil";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Perfil />
			<StatusBar
				barStyle="light"
				translucent={false}
				backgroundColor="#1a1a1a"
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1a1a1a",
		alignItems: "center",
		justifyContent: "flex-start",
	},
});
