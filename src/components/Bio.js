import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	Dimensions,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const vw = Dimensions.get("screen").width;

export function Bio() {
	return (
		<View style={styles.bio}>
			<Text style={styles.bioText}>
				<B>e(ste)la / zé</B>
			</Text>
			<Text style={styles.bioText}>
				🎓 EEL- USP (EF){"\n"}📌 <Span>@palalaika_rep</Span>
				{"\n"}⚓ Caçapava - SP/ Moitas - CE
			</Text>
			<Text style={styles.bioText}>
				<B>Ver tradução</B>
			</Text>
			<Text style={styles.bioText}>
				<Span>twitter.com/hagrideluxe</Span>
			</Text>
			<Text style={styles.bioText}>
				Seguido por <B>mateusantana13</B>, <B>tkimaid</B> e{" "}
				<B>outras 128 pessoas</B>
			</Text>
			<View style={styles.containerBtn}>
				<View
					style={{
						flex: 5,
						marginRight: 3,
						borderRadius: 5,
						overflow: "hidden",
					}}
				>
					<TouchableHighlight onPress={() => {}}>
						<View style={styles.btn}>
							<Text style={{ color: "#3CAE10" }}>
								<B>Seguindo</B>
							</Text>
							<Entypo
								name="chevron-down"
								size={11}
								color="#3CAE10"
								style={{ marginLeft: 5 }}
							/>
						</View>
					</TouchableHighlight>
				</View>
				<View
					style={{
						flex: 5,
						marginHorizontal: 3,
						borderRadius: 5,
						overflow: "hidden",
					}}
				>
					<TouchableHighlight onPress={() => {}}>
						<View style={styles.btn}>
							<Text style={{ color: "#FFF" }}>
								<B>Mensagem</B>
							</Text>
						</View>
					</TouchableHighlight>
				</View>
				<View
					style={{
						flex: 1,
						marginLeft: 3,
						borderRadius: 5,
						overflow: "hidden",
					}}
				>
					<TouchableHighlight onPress={() => {}}>
						<View style={styles.btn}>
							<Entypo
								name="chevron-down"
								size={12}
								color="white"
								style={{ marginHorizontal: 5 }}
							/>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		</View>
	);
}

const B = (props) => (
	<Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

const Span = (props) => (
	<Text style={{ color: "#E3F4FE" }}>{props.children}</Text>
);

const styles = StyleSheet.create({
	bio: {
		width: vw,
		alignItems: "flex-start",
		backgroundColor: "#1a1a1a",
		paddingHorizontal: 15,
		paddingBottom: 10,
	},

	bioText: {
		color: "white",
		fontSize: 14.6,
	},

	containerBtn: {
		paddingTop: 22,
		flexDirection: "row",
	},

	btn: {
		backgroundColor: "#000",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		borderWidth: 1.5,
		borderColor: "#565656",
		flexDirection: "row",
		height: 30,
	},
});
