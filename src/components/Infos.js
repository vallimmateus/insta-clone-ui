import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import { ColorStory, Story } from "./Story";

import photoPerfil from "../images/perfil.jpg";

const vw = Dimensions.get("screen").width;

export function Infos() {
	return (
		<View style={styles.statistics}>
			<Story source={photoPerfil} size={92} color={ColorStory.Null} />
			<View style={styles.containerStats}>
				<View style={styles.stats}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "bold",
							color: "white",
						}}
					>
						211
					</Text>
					<Text style={{ color: "white" }}>Publicações</Text>
				</View>
				<View style={styles.stats}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "bold",
							color: "white",
						}}
					>
						949
					</Text>
					<Text style={{ color: "white" }}>Seguidores</Text>
				</View>
				<View style={styles.stats}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "bold",
							color: "white",
						}}
					>
						910
					</Text>
					<Text style={{ color: "white" }}>Seguindo</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	statistics: {
		backgroundColor: "#1a1a1a",
		width: vw,
		height: 110,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
	},

	photo: {
		paddingTop: 10,
		borderRadius: 45,
		width: 90,
		height: 90,
	},

	stats: {
		alignItems: "center",
		color: "white",
	},

	containerStats: {
		justifyContent: "space-around",
		flexDirection: "row",
		flex: 1,
		paddingLeft: 10,
	},
});
