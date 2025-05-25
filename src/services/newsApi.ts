import axios from "axios";
import type { NewsItem } from "../types";

const API_KEY = "fe76ba5083e941b2a73d4ccf1f7c8862";

export async function fetchCryptoNews(): Promise<NewsItem[]> {
  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: "cryptocurrency",
        sortBy: "publishedAt",
        apiKey: API_KEY,
        pageSize: 10,
      },
    });

    if (response.data.status !== "ok") {
      console.error("NewsAPI error:", response.data);
      return [];
    }

    return response.data.articles;
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return [];
  }
}
