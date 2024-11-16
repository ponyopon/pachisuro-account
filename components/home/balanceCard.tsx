import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import { LineGraph } from "../lineGraph";
import { Record } from "../../types";

interface BalanceCardProps {
  data : Record
  balance: number; // Expecting balance as a prop
}

function extractInputsAndOutputs(records: Record[]): { inputs: number[]; outputs: number[] ;dates: string[]} {
  const inputs = records.map(record => record.input);
  const outputs = records.map(record => record.output);
  const dates = records.map(record => record.date)
  return { inputs, outputs, dates };
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ data, balance }) => {
  const {inputs, outputs, dates} = extractInputsAndOutputs(data)
  console.log(data)
  return (
    <View style={styles.balanceCard}>
      <Text style={styles.cardTitle}>今月の収支</Text>
      <Text style={styles.balanceAmount}>{balance.toLocaleString()}円</Text>
      <Text style={styles.balanceChange}>Last 30 days +12%</Text>
      
      <View style={styles.chartPlaceholder} >

      <LineGraph data={inputs} width={400} height={100} labels={dates} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  balanceCard: {
    backgroundColor: "#1D1D1D",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardTitle: {
    color: "#A0A0A0",
    fontSize: 16,
  },
  balanceAmount: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  balanceChange: {
    color: "#4CAF50",
    fontSize: 14,
    marginTop: 4,
  },
  chartPlaceholder: {
    height: 100,
    backgroundColor: "#333",
    borderRadius: 8,
    marginTop: 15,
  },
  balanceSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  }
});
