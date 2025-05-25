import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Linking, Button } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { NewsItem } from "../types/crypto";

export default function NewsDetail() {
  const route = useRoute<RouteProp<{ params: { item: NewsItem } }, "params">>();
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {item.urlToImage && <Image source={{ uri: item.urlToImage }} style={styles.image} />}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.source}>{item.source.name}</Text>
      <Text style={styles.content}>{item.content || item.description}</Text>
      <Button title="Read Full Article" onPress={() => Linking.openURL(item.url)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },
  source: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    color: "#334155",
    marginBottom: 16,
  },
});
