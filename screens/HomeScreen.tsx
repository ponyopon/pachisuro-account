import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import {
  selectMonthlySpending,
  selectTotalBalance,
} from "../utils/calculateSelector";
import { RootState } from "../store";

const HomeScreen: React.FC = () => {
  //   const balance = 3943;
  //   const monthlySpending = 1000;
  const recentActivities = [
    { id: "1", date: "2022-02-09", type: "income", amount: 200 },
    { id: "2", date: "2022-02-09", type: "spending", amount: 100 },
    { id: "3", date: "2022-02-08", type: "income", amount: 500 },
  ];
  const initialRecords = useSelector(
    (state: RootState) => state.history.records,
  );
  const balance = useSelector(selectTotalBalance);
  const monthlySpending = useSelector(selectMonthlySpending);

  return (
    <View style={styles.container}>
      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.cardTitle}>Total Balance</Text>
        <Text style={styles.balanceAmount}>${balance.toLocaleString()}</Text>
        <Text style={styles.balanceChange}>Last 30 days +12%</Text>
        {/* Chart Placeholder */}
        <View style={styles.chartPlaceholder} />
      </View>

      {/* Balance Summary */}
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
          <Text style={styles.summaryAmount}>{monthlySpending}</Text>
        </View>
      </View>

      {/* Recent Activities */}
      <Text style={styles.sectionTitle}>Recent Activities</Text>
      <FlatList
        data={recentActivities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.activityItem}>
            <Ionicons
              name={item.type === "income" ? "arrow-up" : "arrow-down"}
              size={24}
              color={item.type === "income" ? "#4CAF50" : "#F44336"}
            />
            <View style={styles.activityDetails}>
              <Text style={styles.activityDate}>{item.date}</Text>
              <Text style={styles.activityType}>{item.type}</Text>
            </View>
            <Text style={styles.activityAmount}>${item.amount.toFixed(2)}</Text>
          </View>
        )}
      />
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

export default HomeScreen;
