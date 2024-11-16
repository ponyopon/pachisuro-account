import React from "react";
import { StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { chartConfig } from "../config/chartConfig";
import { chartProps } from "../types";

export const LineGraph = (props: chartProps) => {
  const { labels, data, width, height } = props;
  return (
    <LineChart
      data={{
        labels: labels,
        datasets: [{ data: data }],
      }}
      width={width - 40}
      height={height? height : 200}
      chartConfig={chartConfig}
      bezier
      style={styles.chart}
    />
  );
};

const styles = StyleSheet.create({
  chart: {
    borderRadius: 10,
    marginTop: 10,
  },
});
