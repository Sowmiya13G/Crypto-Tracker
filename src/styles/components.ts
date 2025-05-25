import { StyleSheet } from "react-native";

const cyptoCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
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
    color: "#16a34a",
  },
  negative: {
    color: "#dc2626",
  },
});

export { cyptoCardStyles };
