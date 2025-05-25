import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
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

const newStyles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    height: 150,
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    padding: 10,
    color: "#0f172a",
  },
  source: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    color: "#475569",
  },
});


const newsDetailsStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },
  source: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    color: "#334155",
    marginBottom: 16,
  },
});

const cryptoDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#1e40af",
  },
  chart: {
    borderRadius: 8,
  },
});

export { HomeStyles, cryptoDetailStyles, newStyles, newsDetailsStyles };

