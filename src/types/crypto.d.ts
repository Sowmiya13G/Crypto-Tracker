import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}
export interface NewsItem {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: {
    name: string;
  };
}

export type NewsStackParamList = {
  NewsList: undefined;
  NewsDetail: { item: NewsItem };
};

export type NewsDetailScreenProps = NativeStackScreenProps<
  NewsStackParamList,
  "NewsDetail"
>;
