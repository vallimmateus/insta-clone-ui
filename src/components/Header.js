import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Notification from "../images/vectors/instagram-notification-line.svg";
import Leftarrow from "../images/vectors/instagram-leftarrow-line.svg";
import Options from "../images/vectors/instagram-options-fill.svg";

const vw = Dimensions.get("screen").width;

export function Header() {
	return (
		<View style={styles.container}>
			<Leftarrow width={24} style={{ marginLeft: 13 }} />
			<View style={styles.containerLeft}>
				<Text style={styles.user}>hotzshower</Text>
			</View>
			<View style={{ flexDirection: "row", justifyContent: "center" }}>
				<Notification height={24} width={35} />
				<Options height={16} width={40} style={{ marginTop: 4 }} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: vw,
		height: 50,
		backgroundColor: "#1a1a1a",
		alignItems: "center",
	},

	containerLeft: {
		flex: 1,
	},

	user: {
		fontFamily: "Roboto",
		fontSize: 18,
		fontWeight: "700",
		color: "white",
		paddingLeft: 20,
	},

	ellipsis: {
		transform: [{ rotate: "90deg" }],
		paddingHorizontal: 6,
	},
});
