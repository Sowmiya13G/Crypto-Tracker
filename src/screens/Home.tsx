import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CryptoCard from "../components/CryptoCard";
import { fetchCryptos } from "../services/cryptoApi";
import { Crypto } from "../types/crypto";

export default function Home() {
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
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#1e40af" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Crypto Portfolio Tracker</Text>

      <FlatList
        data={cryptos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CryptoCard crypto={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1e40af",
    marginBottom: 20,
    textAlign: "center",
  },
  separator: {
    height: 12,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
