import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import PostCard from "../../components/postCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
    
  const posts = [
    {
      cod: 1,
      profileImg: require("@/assets/perfil1.png"),
      profileNome: "Hannah Baker",
      postImg: require("@/assets/postImg1.png"),
    },
    {
      cod: 2,
      profileImg: require("@/assets/perfil2.png"),
      profileNome: "Caleb Vitor",
      postImg: require("@/assets/postImg2.png"),
    },
    {
      cod: 3,
      profileImg: require("@/assets/perfil3.png"),
      profileNome: "Vitor Chaves",
      postImg: require("@/assets/postImg3.png"),
    },
    {
      cod: 4,
      profileImg: require("@/assets/perfil4.png"),
      profileNome: "Cintia Paula",
      postImg: require("@/assets/postImg4.png"),
    },
  ];

 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pesquisar}>
        <MaterialIcons name="search" size={32} color={"#E88046"} />
        <Text style={styles.pesquisa}>Pesquisa</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <PostCard posts={posts} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 0,
    backgroundColor: "#FFFDFC",
    justifyContent: "center",
    alignItems: "center",
  },
  pesquisar: {
    flexDirection: "row",
    width: "80%",
    marginTop: 24,
    marginBottom: 32,
    padding: "2%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 12,
  },
  pesquisa: {
    paddingLeft: 10,
    fontSize: 18,
  },
  scroll: {
    width: "90%",
  },
});
