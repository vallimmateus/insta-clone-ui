import React from "react";
import { Header } from "../components/Header";
import { Infos } from "../components/Infos";
import { Bio } from "../components/Bio";
import { Destaques } from "../components/Destaques";
import { Aba, Posts } from "../components/Posts";
import { Navigator } from "../components/Navigator";
import { ScrollView, View } from "react-native";

export function Perfil() {
	return (
		<>
			<Header />
			<ScrollView
				stickyHeaderIndices={[3]}
				showsVerticalScrollIndicator={false}
			>
				<Infos />
				<Bio />
				<Destaques />
				<Aba />
				<Posts />
			</ScrollView>
			<Navigator />
		</>
	);
}
