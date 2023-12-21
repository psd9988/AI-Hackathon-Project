import React, { createContext, useState } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn}}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };