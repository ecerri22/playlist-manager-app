import { createContext, useState, useEffect } from "react";

const TokenContext = createContext("");

function TokenProvider({ children }) {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let storedToken = window.localStorage.getItem("token");

    if (!storedToken && hash) {
      storedToken = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", storedToken);
    }

    setToken(storedToken);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <TokenContext.Provider value={{ token, logout }}>
      {children}
    </TokenContext.Provider>
  );
}

export { TokenContext, TokenProvider };
