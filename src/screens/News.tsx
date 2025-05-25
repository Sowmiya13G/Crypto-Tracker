import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from "react-native";

// navigation
import { NavigationProp, useNavigation } from "@react-navigation/native";

// api
import { fetchCryptoNews } from "../services/newsApi";

// types
import { newStyles } from "../styles/screens";
import type { NewsItem, NewsStackParamList } from "../types";

export default function News() {
  // local states
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
            <View style={newStyles.card}>
              {item.urlToImage && (
                <Image source={{ uri: item.urlToImage }} style={newStyles.image} />
              )}
              <Text style={newStyles.title}>{item.title}</Text>
              <Text style={newStyles.source}>{item.source.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
  );
}
