import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { TotalSpendingSection } from "../components/totalSpending";
import { EarningSection } from "../components/earnings";
import { ProfitSection } from "../components/profit";

const screenWidth = Dimensions.get("window").width;
// const records = [
//   { date: "Jan 21", input: 2000, output: 1500, profit: 500, gamesPlayed: 50 },
//   { date: "Feb 21", input: 2500, output: 1800, profit: 700, gamesPlayed: 55 },
//   { date: "Mar 21", input: 3000, output: 2500, profit: 500, gamesPlayed: 60 },
//   { date: "Apr 21", input: 2800, output: 2200, profit: 600, gamesPlayed: 62 },
//   // Add more entries as required
// ];

const StatsScreen: React.FC = () => {
  const records = useSelector((state: RootState) => state.history.records);
  // Transform the data into a format suitable for charts
  const labels = records.map((record) => record.date);
  const inputData = records.map((record) => record.input);
  const outputData = records.map((record) => record.output);
  //   const profitData = records.map((record) => record.profit);
  //   const gamesPlayedData = records.map((record) => record.gamesPlayed);

  return (
    <ScrollView style={styles.container}>
      {/* Total Spending */}
      <TotalSpendingSection
        labels={labels}
        data={inputData}
        width={screenWidth}
      />

      {/* Spending and Earnings */}
      <EarningSection labels={labels} data={outputData} width={screenWidth} />

      {/* Net Profit */}
      <ProfitSection
        labels={labels}
        inputData={inputData}
        outputData={outputData}
        width={screenWidth}
      />

      {/* Total Games Played
      <View style={styles.section}>
        <Text style={styles.title}>Total Games Played</Text>
        <Text style={styles.amount}>
          {gamesPlayedData.reduce((a, b) => a + b, 0)}
        </Text>
        <Text style={[styles.subTitle, { color: "green" }]}>
          Last 12 months +5%
        </Text>
        <LineGraph labels={labels} data={gamesPlayedData} width={screenWidth} />
      </View> */}
    </ScrollView>
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

export default StatsScreen;
