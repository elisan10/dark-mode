// this customized state hook is going set something to local storage
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredVaue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    setStoredVaue(value);
    localStorage.setItem(key, value);
  };
  return [storedValue, setValue];
};
