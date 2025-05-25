import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View
} from "react-native";

// others
import CryptoCard from "../components/CryptoCard";
import { fetchCryptos } from "../services/cryptoApi";
import { Crypto } from "../types";
import { HomeStyles } from "../styles/screens";

export default function Home() {
  // local state
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCryptos();
  }, []);

  async function loadCryptos() {
    try {
      const data = await fetchCryptos();
      setCryptos(data);
    } catch (error) {
      console.error("Failed to load cryptos:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={HomeStyles.centered}>
        <ActivityIndicator size="large" color="#1e40af" />
      </View>
    );
  }

  return (
    <SafeAreaView style={HomeStyles.container}>
      <Text style={HomeStyles.title}>Crypto Portfolio Tracker</Text>

      <FlatList
        data={cryptos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CryptoCard crypto={item} />}
        ItemSeparatorComponent={() => <View style={HomeStyles.separator} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
