import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, Text, View } from "react-native";

// packages
import { RouteProp, useRoute } from "@react-navigation/native";
import { LineChart } from "react-native-chart-kit";

// types
import { fetchCryptoData } from "../services/chartApi";
import { cryptoDetailStyles } from "../styles/screens";
import { CryptoRouteParams } from "../types";

export default function CryptoDetail() {
  const route = useRoute<RouteProp<{ params: CryptoRouteParams }, "params">>();
  const { crypto } = route.params;
  const [prices, setPrices] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPrices = async () => {
      const data = await fetchCryptoData(crypto.id);
      setPrices(data);
      setLoading(false);
    };

    loadPrices();
  }, [crypto.id]);

  if (loading) {
    return (
      <View style={cryptoDetailStyles.centered}>
        <ActivityIndicator size="large" color="#1e40af" />
      </View>
    );
  }

  return (
    <View style={cryptoDetailStyles.container}>
      <Text style={cryptoDetailStyles.title}>{crypto.name} - Last 7 Days</Text>
      <LineChart
        data={{
          labels: prices.map((_, i) => i.toString()), // dummy labels
          datasets: [{ data: prices }],
        }}
        width={Dimensions.get("window").width - 32}
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: "#f0f4f8",
          backgroundGradientFrom: "#f0f4f8",
          backgroundGradientTo: "#f0f4f8",
          decimalPlaces: 2,
          color: () => "#1e40af",
        }}
        style={cryptoDetailStyles.chart}
      />
    </View>
  );
}

