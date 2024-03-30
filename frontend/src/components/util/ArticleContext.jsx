import React, { createContext, useContext, useState } from "react";

// Create a context
const MyContext = createContext();

// Provider component
export const MyProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    // Initialize data from local storage, or use default value
    const storedData = localStorage.getItem("myData");
    return storedData ? JSON.parse(storedData) : null;
  });

  // Function to update data
  const updateData = (newData) => {
    setData(newData);
    localStorage.setItem("myData", JSON.stringify(newData));
  };

  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to access context value
export const useMyContext = () => useContext(MyContext);
