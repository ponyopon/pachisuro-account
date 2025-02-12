export type RootStackParamList = {
  Home: undefined;
  Records: undefined;
  AddRecord: undefined;
  Charts: undefined;
};

export interface Record {
  id: number;
  date: string;
  storeName: string;
  input: number;
  output: number;
  memo: string;
}

export type chartProps = {
  labels: string[];
  data: number[];
  width: number;
};
