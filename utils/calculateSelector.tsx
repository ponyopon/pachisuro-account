// selectors.ts
import { RootState } from "../store";
// import { Record } from '../features/historySlice';
import { format, isThisMonth } from "date-fns";

// Calculate total balance
export const selectTotalBalance = (state: RootState) => {
  return state.history.records.reduce(
    (acc, record) => acc + (record.output - record.input),
    0,
  );
};

// Calculate monthly spending (for the current month)
export const selectMonthlySpending = (state: RootState) => {
  const currentMonthRecords = state.history.records.filter((record) =>
    isThisMonth(new Date(record.date)),
  );
  return currentMonthRecords.reduce(
    (acc, record) => acc + (record.output - record.input),
    0,
  );
};
