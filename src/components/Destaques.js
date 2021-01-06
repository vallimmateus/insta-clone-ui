import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { ColorStory, Destaque } from "./Story";

import papelDeParede from "../images/destaques/papel-de-parede.jpg";
import migxs from "../images/destaques/migxs.jpg";
import Lorenhell from "../images/destaques/Lorenhell.jpg";
import Moitas from "../images/destaques/moitas.jpg";
import pimenta2018 from "../images/destaques/pimenta-2018.jpg";
import UNICAMP2018 from "../images/destaques/UNICAMP-2018.jpg";
import ENEM2017 from "../images/destaques/ENEM-2017.jpg";

export function Destaques() {
	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<View style={styles.destaque}>
					<Destaque
						source={papelDeParede}
						size={63}
						color={ColorStory.Off}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.destaqueText}
					>
						papel de parede
					</Text>
				</View>
				<View style={styles.destaque}>
					<Destaque source={migxs} size={63} color={ColorStory.Off} />
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.destaqueText}
					>
						migxs
					</Text>
				</View>
				<View style={styles.destaque}>
					<Destaque
						source={Lorenhell}
						size={63}
						color={ColorStory.Off}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.destaqueText}
					>
						Lorenhell
					</Text>
				</View>
				<View style={styles.destaque}>
					<Destaque
						source={Moitas}
						size={63}
						color={ColorStory.Off}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.destaqueText}
					>
						Moitas
					</Text>
				</View>
				<View style={styles.destaque}>
					<Destaque
						source={pimenta2018}
						size={63}
						color={ColorStory.Off}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.destaqueText}
					>
						pimenta 2018
					</Text>
				</View>
				<View style={styles.destaque}>
					<Destaque
						source={UNICAMP2018}
						size={63}
						color={ColorStory.Off}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.destaqueText}
					>
						UNICAMP 2018
					</Text>
				</View>
				<View style={styles.destaque}>
					<Destaque
						source={ENEM2017}
						size={63}
						color={ColorStory.Off}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.destaqueText}
					>
						ENEM 2017
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1a1a1a",
		height: 105,
	},
	destaque: {
		alignItems: "center",
		justifyContent: "center",
		padding: 2,
		width: 82,
	},
	destaqueText: {
		color: "white",
		fontWeight: "300",
		fontSize: 12,
		paddingTop: 3,
	},
});
