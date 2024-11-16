import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import {
  selectMonthlySpending,
  selectTotalBalance,
} from "../utils/calculateSelector";
import { RootState } from "../store";
import { BalanceCard } from "../components/home/balanceCard";
import { BalanceSummary } from "../components/home/balanceSummary";
import { RecentActivities } from "../components/home/recentActivities";

enum Salary {
  income = "収入",
  spending = "支払い",
}
const HomeScreen: React.FC = () => {

  const initialRecords = useSelector(
    (state: RootState) => state.history.records,
  );
  const recentActivities = initialRecords.slice(0, 3);;
  const balance = useSelector(selectTotalBalance);
  const monthlySpending = useSelector(selectMonthlySpending);

  return (
    <View style={styles.container}>
      {/* Balance Card */}
      <BalanceCard data={initialRecords} balance={balance} />

      {/* Balance Summary */}
      <BalanceSummary balance={balance} monthlySpending={monthlySpending} />

      {/* Recent Activities */}
      {recentActivities && (
        <RecentActivities recentActivities={recentActivities} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  }
});

export default HomeScreen;
