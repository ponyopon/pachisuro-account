import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";

interface BalanceSummaryProps {
  balance: number;        // Total balance amount
  monthlySpending: number; // This month's spending amount
}

export const BalanceSummary: React.FC<BalanceSummaryProps> = ({ balance, monthlySpending }) => {
  return (
    <View style={styles.balanceSummary}>
      <View style={styles.summaryItem}>
        <MaterialCommunityIcons name="wallet" size={24} color="#A0A0A0" />
        <Text style={styles.summaryText}>Total balance</Text>
        <Text style={styles.summaryAmount}>${balance.toFixed(2)}</Text>
      </View>
      <View style={styles.summaryItem}>
        <MaterialCommunityIcons
          name="file-document"
          size={24}
          color="#A0A0A0"
        />
        <Text style={styles.summaryText}>This month’s spending</Text>
        <Text style={styles.summaryAmount}>${monthlySpending.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
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
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#1D1D1D",
    borderRadius: 8,
    marginVertical: 5,
  },
  activityDetails: {
    flex: 1,
    marginLeft: 10,
  },
  activityDate: {
    color: "#A0A0A0",
    fontSize: 14,
  },
  activityType: {
    color: "white",
    fontSize: 16,
  },
  activityAmount: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
