import axios from "axios";

export async function fetchCryptoData(id: string): Promise<number[]> {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
      {
        params: {
          vs_currency: "usd",
          days: 7,
        },
      }
    );

    return response.data.prices.map((p: [number, number]) => p[1]); // extract only price
  } catch (error) {
    console.error("Failed to fetch crypto chart data:", error);
    return [];
  }
}
