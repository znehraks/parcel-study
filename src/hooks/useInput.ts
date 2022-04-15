import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";

type ReturnTypes<T = any> = {
  value: T;
  handler: (e: ChangeEvent<HTMLInputElement>) => void;
  setValue: Dispatch<SetStateAction<T>>;
};

const useInput = <T = any>(initialData: T): ReturnTypes => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return { value, handler, setValue };
};
export default useInput;
