import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchCryptoNews } from "../services/newsApi";
import type { NewsItem, NewsStackParamList } from "../types/crypto";

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const navigation = useNavigation<NavigationProp<NewsStackParamList>>();

  useEffect(() => {
    (async () => {
      const data = await fetchCryptoNews();
      setNews(data);
    })();
  }, []);

  return (
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("NewsDetail", { item })}
          >
            <View style={styles.card}>
              {item.urlToImage && (
                <Image source={{ uri: item.urlToImage }} style={styles.image} />
              )}
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.source}>{item.source.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    height: 150,
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    padding: 10,
    color: "#0f172a",
  },
  source: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    color: "#475569",
  },
});
