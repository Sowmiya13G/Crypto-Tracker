import React from "react";
import { Text, TouchableOpacity } from "react-native";

// package
import { NavigationProp, useNavigation } from "@react-navigation/native";

// others
import { cyptoCardStyles } from "../styles/components";
import type { CryptoCardProps, HomeStackParamList } from "../types";

export default function CryptoCard({ crypto }: CryptoCardProps) {
  const isPositive = crypto.price_change_percentage_24h >= 0;
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  return (
    <TouchableOpacity
      style={cyptoCardStyles.card}
      onPress={() => navigation.navigate("CryptoDetail", { crypto })}
    >
      <Text style={cyptoCardStyles.name}>
        {crypto.name} ({crypto.symbol.toUpperCase()})
      </Text>
      <Text style={cyptoCardStyles.price}>${crypto.current_price.toFixed(2)}</Text>
      <Text
        style={[cyptoCardStyles.change, isPositive ? cyptoCardStyles.positive : cyptoCardStyles.negative]}
      >
        {crypto.price_change_percentage_24h.toFixed(2)}%
      </Text>
    </TouchableOpacity>
  );
}
