import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


interface Activity {
    id: string;      // Assuming id is a string
    type: "income" | "expense"; // Assuming the type can be income or expense
    date: string;    // Date as a string
    amount: number;  // Amount as a number
  }
  
  interface RecentActivitiesProps {
    recentActivities: Activity[]; // Array of recent activities passed as a prop
  }
  
  export const RecentActivities: React.FC<RecentActivitiesProps> = ({ recentActivities }) => {
    return (
      <View>
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
