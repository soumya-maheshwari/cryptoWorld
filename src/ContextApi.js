import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const ContextApi = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") {
      setSymbol("₹");
    } else if (currency === "USD") {
      setSymbol("$");
    }
  }, [currency]);
  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export default ContextApi;

export const CryptoState = () => {
  return useContext(Crypto);
};
