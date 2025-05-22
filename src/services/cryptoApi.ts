import axios from "axios";
import type { Crypto } from "../types/crypto";

export async function fetchCryptos(): Promise<Crypto[]> {
  const response = await axios.get<Crypto[]>(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
        sparkline: false,
      },
    }
  );
  return response.data;
}
