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
import { RootState } from "../store";
import { deleteRecord } from "../features/historySlice";
import Ionicons from "react-native-vector-icons/Ionicons";

const RecordsScreen: React.FC = () => {
  const initialRecords = useSelector(
    (state: RootState) => state.history.records,
  );
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this record?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => dispatch(deleteRecord(id)),
          style: "destructive",
        },
      ],
      { cancelable: true },
    );
  };
  const [records, setRecords] = useState<Record[]>(initialRecords);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const sortRecords = (criterion: "date" | "input" | "output") => {
    const sortedRecords = [...records].sort((a, b) => {
      if (criterion === "date") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return a[criterion] - b[criterion];
    });
    setRecords(sortedRecords);
    setIsFilterVisible(false); // Hide filter modal after sorting
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsFilterVisible(true)}>
        <Text style={{ color: "blue", marginBottom: 10 }}>
          Open Filter Options
        </Text>
      </TouchableOpacity>

      <FlatList
        data={records}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.recordItem}>
            <View style={styles.recordInfo}>
              <Text style={styles.date}>{item.date}</Text>
              <Text
                style={styles.details}
              >{`$${item.input} in, $${item.output} out`}</Text>
            </View>
            <View style={styles.recordActions}>
              <Text style={styles.total}>{`$${item.output - item.input}`}</Text>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Ionicons
                  name="trash-outline"
                  size={24}
                  color="red"
                  style={styles.deleteIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noRecords}>No records available</Text>
        }
      />

      {/* Filter Modal */}
      <Modal visible={isFilterVisible} animationType="slide">
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
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 10,
  },
  recordItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    marginVertical: 5,
  },
  recordInfo: {
    flex: 1,
  },
  date: {
    color: "#ffffff",
    fontSize: 16,
  },
  details: {
    color: "#a0a0a0",
    fontSize: 14,
  },
  recordActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  total: {
    color: "#ffffff",
    fontSize: 16,
    marginRight: 10,
  },
  deleteIcon: {
    padding: 5,
  },
  noRecords: {
    color: "#a0a0a0",
    textAlign: "center",
    marginTop: 20,
  },
});

export default RecordsScreen;
