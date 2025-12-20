import { createContext, useContext, useState } from "react";

const CityContext = createContext();

export function CityProvider({ children }) {
  const [city, _setCity] = useState(null);

  // 🔥 always normalize
  const setCity = (value) => {
    if (!value) {
      _setCity(null);
    } else {
      _setCity(value.toLowerCase());
    }
  };

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  return useContext(CityContext);
}
