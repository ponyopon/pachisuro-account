import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const RecentActivities = ({ recentActivities }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>最近の記録</Text>
      <FlatList
        data={recentActivities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              {/* Inputのアイコン */}
              {item.output && (
                <View style={styles.activityItem}>
                  <Ionicons
                    name="arrow-up" // Inputに対して上矢印
                    size={24}
                    color="#4CAF50" // 緑色
                  />
                  <View style={styles.activityDetails}>
                    <Text style={styles.activityDate}>{item.date}</Text>
                    <Text style={styles.activityType}>収入</Text>
                  </View>
                  <Text style={styles.activityAmount}>{item.output}円</Text>
                </View>
              )}

              {/* Outputのアイコン */}
              {item.input && (
                <View style={styles.activityItem}>
                  <Ionicons
                    name="arrow-down" // Outputに対して下矢印
                    size={24}
                    color="#F44336" // 赤色
                  />
                  <View style={styles.activityDetails}>
                    <Text style={styles.activityDate}>{item.date}</Text>
                    <Text style={styles.activityType}>支出</Text>
                  </View>
                  <Text style={styles.activityAmount}>{item.input}円</Text>
                </View>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
