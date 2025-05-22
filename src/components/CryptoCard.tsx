import React from "react";
import { View, Text, StyleSheet } from "react-native";
import type { Crypto } from "../types/crypto";

interface Props {
  crypto: Crypto;
}

export default function CryptoCard({ crypto }: Props) {
  const isPositive = crypto.price_change_percentage_24h >= 0;

  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {crypto.name} ({crypto.symbol.toUpperCase()})
      </Text>
      <Text style={styles.price}>${crypto.current_price.toFixed(2)}</Text>
      <Text
        style={[styles.change, isPositive ? styles.positive : styles.negative]}
      >
        {crypto.price_change_percentage_24h.toFixed(2)}%
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
    color: "#0f172a",
  },
  price: {
    fontSize: 16,
    color: "#334155",
  },
  change: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "bold",
  },
  positive: {
    color: "#16a34a", // green
  },
  negative: {
    color: "#dc2626", // red
  },
});
