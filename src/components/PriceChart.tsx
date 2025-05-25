import React from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { PriceChartProps } from "../types";

const screenWidth = Dimensions.get("window").width;

export default function PriceChart({ prices, labels }: PriceChartProps) {
  return (
    <View style={{ marginVertical: 16 }}>
      <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold", color: "#1e40af" }}>
        Crypto Price (Last 7 Days)
      </Text>
      <LineChart
        data={{
          labels: labels || ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{ data: prices }],
        }}
        width={screenWidth - 32}
        height={220}
        yAxisLabel="$"
        withDots={true}
        withShadow={false}
        withInnerLines={true}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#f8fafc",
          backgroundGradientTo: "#f8fafc",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(30, 64, 175, ${opacity})`,
          labelColor: () => "#334155",
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: "#1e40af",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        bezier={false}
      />
    </View>
  );
}
