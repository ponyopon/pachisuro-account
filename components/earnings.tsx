import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { BarGraph } from "./barGraph";
import { chartProps } from "../types";

export const EarningSection = (props: chartProps) => {
  const { labels, data, width } = props;
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Spending and Earnings</Text>
      <Text style={styles.amount}>¥{data.reduce((a, b) => a + b, 0)}</Text>
      <Text style={styles.subTitle}>Last 12 months</Text>
      <BarGraph labels={labels} data={data} width={width} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
  },
  section: {
    backgroundColor: "#1F1F1F",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  amount: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  subTitle: {
    color: "#A1A1A1",
    fontSize: 14,
  },
});
