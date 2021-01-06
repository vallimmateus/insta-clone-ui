import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

const vw = Dimensions.get("screen").width;

import Home from "../images/vectors/instagram-home-line.svg";
import Search from "../images/vectors/instagram-search-line.svg";
import Reels from "../images/vectors/instagram-reels-line.svg";
import Marketplace from "../images/vectors/instagram-marketplace-line.svg";
import Account from "../images/vectors/instagram-account-line.svg";
import photoPerfil from "../images/perfil2.jpg";
import Svg, { Circle } from "react-native-svg";

export function Navigator() {
	return (
		<View style={styles.container}>
			<Home height={25} width={25} />
			<Search height={25} width={25} />
			<Reels height={25} width={25} />
			<Marketplace height={25} width={25} />
			<View style={{ position: "relative" }}>
				<Image source={photoPerfil} style={styles.perfil} />
				<Svg
					height="35"
					width="25"
					style={{ position: "absolute", marginBottom: -5 }}
				>
					<Circle cx="12.5" cy="32" r="2.2" fill="#f11" />
				</Svg>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	perfil: {
		height: 25,
		width: 25,
		borderRadius: 12.5,
	},
	container: {
		flexDirection: "row",
		justifyContent: "space-around",
		paddingVertical: 10,
		backgroundColor: "#000",
		width: vw,
	},
});
