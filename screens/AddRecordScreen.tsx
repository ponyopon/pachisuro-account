import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import { addRecord } from "../features/historySlice";

const AddRecordScreen: React.FC<any> = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [memo, setMemo] = useState("");

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!date || !storeName || input === "" || output === "") {
      alert("Please fill in all fields.");
      return;
    }

    const record: Omit<Record, "id"> = {
      date: date.toLocaleDateString(),
      storeName,
      input: Number(input),
      output: Number(output),
      memo,
    };

    dispatch(addRecord(record));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Date:</Text>
      <TouchableOpacity
        style={styles.dateInputContainer}
        onPress={() => setShow(true)}
      >
        <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
        <Icon
          name="calendar-today"
          size={24}
          color="#555"
          style={styles.calendarIcon}
        />
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="spinner"
          onChange={onChange}
        />
      )}

      <TextInput
        placeholder="Store Name"
        value={storeName}
        onChangeText={setStoreName}
        style={styles.input}
      />
      <TextInput
        placeholder="Input"
        value={input}
        onChangeText={setInput}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Output"
        value={output}
        onChangeText={setOutput}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Memo"
        value={memo}
        onChangeText={setMemo}
        style={styles.input}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  dateInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 8,
    marginBottom: 20,
  },
  dateText: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  calendarIcon: {
    marginLeft: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default AddRecordScreen;
