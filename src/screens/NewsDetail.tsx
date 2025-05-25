import React from "react";
import { Button, Image, Linking, ScrollView, Text } from "react-native";

// navigation
import { RouteProp, useRoute } from "@react-navigation/native";

// others
import { newsDetailsStyles } from "../styles/screens";
import { NewsItem } from "../types";

export default function NewsDetail() {
  const route = useRoute<RouteProp<{ params: { item: NewsItem } }, "params">>();
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={newsDetailsStyles.container}>
      {item.urlToImage && <Image source={{ uri: item.urlToImage }} style={newsDetailsStyles.image} />}
      <Text style={newsDetailsStyles.title}>{item.title}</Text>
      <Text style={newsDetailsStyles.source}>{item.source.name}</Text>
      <Text style={newsDetailsStyles.content}>{item.content || item.description}</Text>
      <Button title="Read Full Article" onPress={() => Linking.openURL(item.url)} />
    </ScrollView>
  );
}
