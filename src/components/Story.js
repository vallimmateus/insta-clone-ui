import React from "react";
import {
	Dimensions,
	View,
	Image,
	TouchableOpacity as TOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const ColorStory = {
	Story: ["#FEDA75", "#FA7E1E", "#D62976", "#962FBF", "#4F5BD5"],
	MelhoresAmigos: ["#4EBE19", "#4EBE19"],
	Off: ["#757575", "#757575"],
	Null: ["transparent", "transparent"],
};

export function Story(props) {
	return (
		<LinearGradient
			colors={props.color}
			start={{ x: 0, y: 1 }}
			end={{ x: 1, y: 0 }}
			style={{
				width: props.size,
				height: props.size,
				borderRadius: props.size * 0.5,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<View
				style={{
					width: props.size - 4,
					height: props.size - 4,
					borderRadius: props.size * 0.5,
					backgroundColor: "#1a1a1a",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<TOpacity onPress={() => {}}>
					<Image
						style={{
							width: props.size * 0.9,
							height: props.size * 0.9,
							borderRadius: props.size * 0.45,
						}}
						source={props.source}
					/>
				</TOpacity>
			</View>
		</LinearGradient>
	);
}

export function Destaque(props) {
	return (
		<TOpacity>
			<LinearGradient
				colors={props.color}
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 0 }}
				style={{
					width: props.size,
					height: props.size,
					borderRadius: props.size * 0.5,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<View
					style={{
						width: props.size - 4,
						height: props.size - 4,
						borderRadius: props.size * 0.5,
						backgroundColor: "#1a1a1a",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Image
						style={{
							width: props.size * 0.9,
							height: props.size * 0.9,
							borderRadius: props.size * 0.45,
						}}
						source={props.source}
					/>
				</View>
			</LinearGradient>
		</TOpacity>
	);
}

const vw = Dimensions.get("screen").width;
