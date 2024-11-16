import React, { useState } from "react";
import { View, Text, FlatList, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { deleteRecord } from "../features/historySlice";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

const RecordsScreen: React.FC = () => {
  const records = useSelector((state: RootState) => state.history.records);
  const dispatch = useDispatch();

  // ソート順を管理するステート
  const [isSortedDescending, setIsSortedDescending] = useState(true); // 新しい順か古い順か
  // 展開されたレコードのIDを管理
  const [expandedRecordId, setExpandedRecordId] = useState<number | null>(null);

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
      { cancelable: true }
    );
  };

  const route = useRoute();

  useFocusEffect(
   
    React.useCallback(() => {
      const isDescending = route.params?.isSortedDescending ?? true;
      setIsSortedDescending(isDescending);
    }, [route.params])
  );


  // ソート処理
  const sortedRecords = [...records].sort((a, b) => {
    // 日付形式を YYYY-MM-DD に変換
    const formatDate = (date: string) => {
      const [year, month, day] = date.split('/');
      return new Date(`${year}-${month}-${day}`);
    };
  
    if (isSortedDescending) {
      return formatDate(b.date).getTime() - formatDate(a.date).getTime(); // 新しい順
    } else {
      return formatDate(a.date).getTime() - formatDate(b.date).getTime(); // 古い順
    }
  });

  // ソートボタンのハンドラー
  const handleSortToggle = () => {
    setIsSortedDescending(!isSortedDescending); // ソート順をトグル
  };

  // 展開・折りたたみの切り替え
  const handleToggleExpand = (id: number) => {
    if (expandedRecordId === id) {
      setExpandedRecordId(null); // クリックしたレコードがすでに展開されていれば、閉じる
    } else {
      setExpandedRecordId(id); // 新しいレコードを展開
    }
  };

  return (
    <View style={styles.container}>
      {/* レコードリスト */}
      <FlatList
        data={sortedRecords}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const balance = item.output - item.input; // 収支差引計算
          const isExpanded = expandedRecordId === item.id; // 現在表示されているレコードか判定
          return (
            <TouchableOpacity
              style={styles.activityItem}
              onPress={() => handleToggleExpand(item.id)} // タップで展開・折りたたみ
            >
              {/* アイコンの表示 */}
              <Ionicons
                name={balance >= 0 ? "arrow-up" : "arrow-down"} // プラスなら上矢印、マイナスなら下矢印
                size={24}
                color={balance >= 0 ? "#4CAF50" : "#F44336"} // プラスなら緑色、マイナスなら赤色
              />

              {/* 収支の表示 */}
              <View style={styles.activityDetails}>
                <Text style={styles.activityAmount}>収支: {Math.abs(balance)}円</Text>
                <Text style={styles.activityDate}>{item.date}</Text>
              </View>

              {/* ゴミ箱アイコン */}
              <TouchableOpacity
                onPress={() => handleDelete(item.id)}
                style={styles.deleteButton}
              >
                <Ionicons name="trash-outline" size={24} color="red" />
              </TouchableOpacity>

              {/* 展開された詳細情報 */}
              {isExpanded && (
                <View style={styles.expandedDetails}>
                  <Text style={styles.detailLabel}>収入: {item.output}円</Text>
                  <Text style={styles.detailLabel}>支出: {item.input}円</Text>
                  <Text style={styles.detailLabel}>収支: {balance}円</Text>
                  <Text style={styles.detailLabel}>場所: {item.storeName}</Text>
                  <Text style={styles.memoLabel}>メモ: {item.memo}</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1D1D", // 背景色をダークに統一
    padding: 10,
  },
  activityItem: {
    padding: 15,
    backgroundColor: "#333", // カードの背景
    borderRadius: 8,
    marginVertical: 5,
    position: "relative",
  },
  activityDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  activityAmount: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  activityDate: {
    color: "#A0A0A0",
    fontSize: 14,
  },
  deleteButton: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  expandedDetails: {
    marginTop: 10,
    backgroundColor: "#444",
    borderRadius: 8,
    padding: 10,
  },
  detailLabel: {
    color: "#A0A0A0",
    fontSize: 14,
    marginVertical: 2,
  },
  memoLabel: {
    color: "#A0A0A0",
    fontSize: 14,
    marginTop: 5,
  },
});

export default RecordsScreen;
