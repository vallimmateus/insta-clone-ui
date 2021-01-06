import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableNativeFeedback as TNF,
	Image,
} from "react-native";

import Reels from "../images/vectors/instagram-reels-line-gray.svg";
import ReelsFill from "../images/vectors/instagram-reels-fill.svg";
import Grid from "../images/vectors/instagram-grid-line.svg";
import Contact from "../images/vectors/instagram-contact-line-gray.svg";
import Galery from "../images/vectors/instagram-galery-fill.svg";

const vw = Dimensions.get("screen").width;

export function Posts() {
	const [posts] = useState([
		{
			id: Math.random(),
			image: require("../images/post1.jpg"),
		},
		{
			id: Math.random(),
			image: require("../images/post2.jpg"),
			type: "galery",
		},
		{
			id: Math.random(),
			image: require("../images/post3.jpg"),
		},
		{
			id: Math.random(),
			image: require("../images/post4.jpg"),
			type: "reels",
		},
		{
			id: Math.random(),
			image: require("../images/post5.jpg"),
			type: "galery",
		},
		{
			id: Math.random(),
			image: require("../images/post6.jpg"),
		},
		{
			id: Math.random(),
			image: require("../images/post7.jpg"),
		},
		{
			id: Math.random(),
			image: require("../images/post8.jpg"),
		},
		{
			id: Math.random(),
			image: require("../images/post9.jpg"),
		},
		{
			id: Math.random(),
			image: require("../images/post10.jpg"),
			type: "galery",
		},
		{
			id: Math.random(),
			image: require("../images/post11.jpg"),
			type: "galery",
		},
		{
			id: Math.random(),
			image: require("../images/post12.jpg"),
			type: "galery",
		},
		{
			id: Math.random(),
			image: require("../images/post13.jpg"),
			type: "galery",
		},
		{
			id: Math.random(),
			image: require("../images/post14.jpg"),
		},
		{
			id: Math.random(),
			image: require("../images/post15.jpg"),
			type: "galery",
		},
	]);

	postfcn = () => {
		return posts.map((element) => {
			return (
				<View key={element.id} style={{ position: "relative" }}>
					<Image
						style={{
							width: vw / 3 - 2,
							height: vw / 3 - 2,
							marginVertical: 1,
							marginHorizontal: 1,
						}}
						source={element.image}
					/>
					{element.type === "galery" && (
						<Galery
							height={17}
							width={17}
							style={{ position: "absolute", top: 8, right: 8 }}
						/>
					)}
					{element.type === "reels" && (
						<ReelsFill
							height={17}
							width={17}
							style={{ position: "absolute", top: 8, right: 8 }}
						/>
					)}
				</View>
			);
		});
	};

	return (
		<View
			style={{
				flex: 1,
				flexDirection: "row",
				justifyContent: "flex-start",
				flexWrap: "wrap",
			}}
		>
			{postfcn()}
		</View>
	);
}

export function Aba() {
	return (
		<View style={styles.container}>
			<View style={styles.tabs}>
				<TNF>
					<View style={styles.tab}>
						<Grid width={23} height={23} />
					</View>
				</TNF>
				<TNF>
					<View style={styles.tab}>
						<Reels width={23} height={23} />
					</View>
				</TNF>
				<TNF>
					<View style={styles.tab}>
						<Contact width={23} height={23} />
					</View>
				</TNF>
			</View>
			<View style={styles.activeTab}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: vw,
		margin: 0,
		padding: 0,
		height: 50,
		backgroundColor: "#1a1a1a",
		borderTopWidth: 0.2,
		borderColor: "#565656",
	},

	tabs: {
		flex: 1,
		flexDirection: "row",
	},

	tab: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	activeTab: {
		width: vw / 3,
		height: 2,
		backgroundColor: "#fff",
		marginTop: -2,
	},
});
