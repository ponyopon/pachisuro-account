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
import SegmentedControl from "@react-native-segmented-control/segmented-control"; // セグメントコントロールを使用

const AddRecordScreen: React.FC<any> = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [memo, setMemo] = useState("");
  const [machineName, setMachineName] = useState(""); // 機種名の状態
  const [gameType, setGameType] = useState("pachinko"); // パチンコorスロットの状態

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!date || !storeName || input === "" || output === "" || !machineName) {
      alert("Please fill in all fields.");
      return;
    }

    const record: Omit<Record, "id"> = {
      date: date.toLocaleDateString(),
      storeName,
      input: Number(input),
      output: Number(output),
      memo,
      machineName, // 機種名
      gameType, // パチンコ or スロット
    };

    dispatch(addRecord(record));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>日付:</Text>
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
        placeholder="店名"
        value={storeName}
        onChangeText={setStoreName}
        style={styles.input}
        placeholderTextColor="#aaa" // placeholder の色を明るく設定
      />
      <TextInput
        placeholder="支出"
        value={input}
        onChangeText={setInput}
        keyboardType="numeric"
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      <TextInput
        placeholder="収入"
        value={output}
        onChangeText={setOutput}
        keyboardType="numeric"
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      <TextInput
        placeholder="Memo"
        value={memo}
        onChangeText={setMemo}
        style={styles.input}
        placeholderTextColor="#aaa"
      />

      {/* 機種名の入力欄 */}
      <Text style={styles.label}>機種名:</Text>
      <TextInput
        placeholder="機種名を入力"
        value={machineName}
        onChangeText={setMachineName}
        style={styles.input}
        placeholderTextColor="#aaa"
      />

      {/* パチンコ or スロットの選択 */}
      <Text style={styles.label}>ゲームタイプ:</Text>
      <SegmentedControl
        values={["パチンコ", "スロット"]}
        selectedIndex={gameType === "pachinko" ? 0 : 1}
        onChange={(event) => setGameType(event.nativeEvent.value)}
        style={styles.segmentedControl}
      />

      {/* Submit ボタン */}
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
    backgroundColor: "#333", // 背景色を暗くする
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: "white", // ラベルの文字色を白に変更
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
    color: "#fff", // 日付の文字色を白に変更
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
    color: "white", // 入力欄の文字色を白に変更
    backgroundColor: "#444", // 入力欄の背景色を暗く
  },
  segmentedControl: {
    marginBottom: 20,
    backgroundColor: "#444", // セグメントコントロールの背景色を暗く
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20, // 上部に余白を追加
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default AddRecordScreen;
