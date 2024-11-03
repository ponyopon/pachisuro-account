import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { LineGraph } from "./lineGraph";
import { chartProps } from "../types";

type profitProps = {
  labels: string[];
  inputData: number[];
  outputData: number[];
  width: number;
};
export const ProfitSection = (props: profitProps) => {
  const { labels, inputData, outputData, width } = props;
  // Calculate profitData based on inputData and outputData
  const profitData = inputData.map((input, index) => input - outputData[index]);
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Net Profit</Text>
      <Text style={styles.amount}>
        ¥{profitData.reduce((a, b) => a + b, 0)}
      </Text>
      <Text
        style={[
          styles.subTitle,
          {
            color: profitData.reduce((a, b) => a + b, 0) > 0 ? "green" : "red",
          },
        ]}
      >
        Last 12 months {profitData.reduce((a, b) => a + b, 0) > 0 ? "+" : ""}
        {Math.round(
          (profitData.reduce((a, b) => a + b, 0) /
            inputData.reduce((a, b) => a + b, 0)) *
            100,
        )}
        %
      </Text>
      <LineGraph labels={labels} data={profitData} width={width} />
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
