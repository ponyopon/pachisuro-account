import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { BarGraph } from "./barGraph";
import { chartProps } from "../types";

export const EarningSection = (props: chartProps) => {
  const { labels, data, width } = props;

  // Calculate total earnings
  const totalEarnings = data.reduce((a, b) => a + b, 0);

  // Calculate month-to-month percentage change
  const currentMonthTotal = data[data.length - 1] || 0; // Last element in data
  const previousMonthTotal = data[data.length - 2] || 0; // Second-last element in data
  const percentageChange = previousMonthTotal
    ? ((currentMonthTotal - previousMonthTotal) / previousMonthTotal) * 100
    : 0;

  return (
    <View style={styles.section}>
      <Text style={styles.title}>今までに稼いだ金額</Text>
      <Text style={styles.amount}>¥{totalEarnings.toLocaleString()}</Text>
      <Text
        style={[
          styles.subTitle,
          { color: percentageChange >= 0 ? "green" : "red" },
        ]}
      >
        Last month {percentageChange >= 0 ? "+" : ""}
        {percentageChange.toFixed(2)}%
      </Text>
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
