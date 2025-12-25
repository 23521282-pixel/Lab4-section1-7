import { useState } from 'react';

// Custom Hook: Tên bắt buộc phải bắt đầu bằng 'use'
function useLocalStorage(key, initialValue) {
  // 1. Khởi tạo state bằng hàm (Lazy Initialization)
  // Chỉ chạy logic này 1 lần duy nhất khi mount để lấy dữ liệu từ LocalStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key); // Lấy item theo key
      // Nếu có thì parse JSON, nếu không thì dùng giá trị mặc định (initialValue)
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // 2. Tạo hàm setValue mới để vừa cập nhật State, vừa lưu vào LocalStorage
  const setValue = (value) => {
    try {
      // Cho phép value là một hàm callback (giống useState chuẩn)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Lưu vào State React
      setStoredValue(valueToStore);
      
      // Lưu vào LocalStorage trình duyệt
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  // Trả về giống hệt useState: [giá trị, hàm cập nhật]
  return [storedValue, setValue];
}

export default useLocalStorage;