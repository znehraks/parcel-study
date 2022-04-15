import { DummyData, IDummyData } from "../../data";
export const fetcher = async (): Promise<IDummyData[]> => {
  return new Promise(() => DummyData);
};
