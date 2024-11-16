import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";

interface BalanceSummaryProps {
  balance: number; // Total balance amount
  monthlySpending: number; // This month's spending amount
}

export const BalanceSummary: React.FC<BalanceSummaryProps> = ({
  balance,
  monthlySpending,
}) => {
  return (
    <View style={styles.balanceSummary}>
      <View style={styles.summaryItem}>
        <MaterialCommunityIcons name="wallet" size={24} color="#A0A0A0" />
        <Text style={styles.summaryText}>収支合計</Text>
        <Text style={styles.summaryAmount}>{balance}円</Text>
      </View>
      <View style={styles.summaryItem}>
        <MaterialCommunityIcons
          name="file-document"
          size={24}
          color="#A0A0A0"
        />
        <Text style={styles.summaryText}>今月の使用額</Text>
        <Text style={styles.summaryAmount}>{monthlySpending}円</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  summaryItem: {
    alignItems: "center",
    width: "45%",
    padding: 10,
    backgroundColor: "#1D1D1D",
    borderRadius: 10,
  },
  summaryText: {
    color: "#A0A0A0",
    fontSize: 14,
    marginTop: 8,
  },
  summaryAmount: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  }
});
