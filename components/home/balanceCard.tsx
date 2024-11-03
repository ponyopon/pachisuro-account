import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";


interface BalanceCardProps {
    balance: number; // Expecting balance as a prop
  }
  
  export const BalanceCard: React.FC<BalanceCardProps> = ({ balance }) => {
    return (
      <View style={styles.balanceCard}>
        <Text style={styles.cardTitle}>Total Balance</Text>
        <Text style={styles.balanceAmount}>${balance.toLocaleString()}</Text>
        <Text style={styles.balanceChange}>Last 30 days +12%</Text>
        {/* Chart Placeholder */}
        <View style={styles.chartPlaceholder} />
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