import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Record } from "../types";

interface HistoryState {
  records: Record[];
}

const initialState: HistoryState = {
  records: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addRecord: (state, action: PayloadAction<Omit<Record, "id">>) => {
      const newRecord = { ...action.payload, id: Date.now() };
      console.log(state);
      state.records.push(newRecord); // Update `state.records` instead of `state`
    },
    deleteRecord: (state, action: PayloadAction<number>) => {
      state.records = state.records.filter(
        (record) => record.id !== action.payload,
      );
    },
  },
});

export const { addRecord, deleteRecord } = historySlice.actions;
export default historySlice.reducer;
