import React from "react";
import { StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { chartConfig } from "../config/chartConfig";
import { chartProps } from "../types";

export const BarGraph = (props: chartProps) => {
  const { labels, data, width } = props;
  return (
    <BarChart
      data={{
        labels: labels,
        datasets: [{ data: data }],
      }}
      width={width - 40}
      height={200}
      yAxisLabel="¥"
      yAxisSuffix="" // Can be set to "" if no suffix is needed
      chartConfig={chartConfig}
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
