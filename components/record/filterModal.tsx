import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Button,
  Modal,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

type Prop = {
  isFilterVisible: boolean;
};
const filterModal = (props: Prop) => {
  const { isFilterVisible } = props;
  return (
    <Modal visible={isFilterVisible} animationType="slide">
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Sort Options</Text>
        <Button title="Sort by Date" onPress={() => sortRecords("date")} />
        <Button title="Sort by Input" onPress={() => sortRecords("input")} />
        <Button title="Sort by Output" onPress={() => sortRecords("output")} />
        <Button title="Close" onPress={() => setIsFilterVisible(false)} />
      </View>
    </Modal>
  );
};

export default filterModal;

      {/* <Modal visible={isFilterVisible} animationType="slide">
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Sort Options</Text>
          <Button title="Sort by Date" onPress={() => sortRecords("date")} />
          <Button title="Sort by Input" onPress={() => sortRecords("input")} />
          <Button
            title="Sort by Output"
            onPress={() => sortRecords("output")}
          />
          <Button title="Close" onPress={() => setIsFilterVisible(false)} />
        </View>
      </Modal> */}

        // const sortRecords = (criterion: "date" | "input" | "output") => {
  //   const sortedRecords = [...records].sort((a, b) => {
  //     if (criterion === "date") {
  //       return new Date(a.date).getTime() - new Date(b.date).getTime();
  //     }
  //     return a[criterion] - b[criterion];
  //   });
  //   // Display the sorted records without changing the Redux state
  //   return sortedRecords;
  // };