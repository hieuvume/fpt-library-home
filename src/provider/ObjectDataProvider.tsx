import React, { createContext, useContext, useState } from 'react';

// Khởi tạo interface cho Context với generic T
interface ObjectDataContextProps<T> {
  data: T | null;
  setData: (data: T) => void;
}

// Sử dụng Partial để bắt buộc truyền kiểu khi sử dụng context
const ObjectDataContext = createContext<ObjectDataContextProps<any> | undefined>(undefined);

export const ObjectDataProvider = <T,>({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<T | null>(null);

  return (
    <ObjectDataContext.Provider value={{ data, setData }}>
      {children}
    </ObjectDataContext.Provider>
  );
};

// Custom hook để sử dụng ObjectDataContext với generic
export const useObjectData = <T,>() => {
  const context = useContext(ObjectDataContext);
  if (!context) {
    throw new Error('useObjectData must be used within an ObjectDataProvider');
  }
  return context as ObjectDataContextProps<T>;
};
