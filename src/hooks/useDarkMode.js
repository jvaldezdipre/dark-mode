import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = key => {
  const [value, setValue] = useLocalStorage(key);

  const toggleMode = e => {
    e.preventDefault();
    setValue(!value);
  };

  return [value, toggleMode];
};
