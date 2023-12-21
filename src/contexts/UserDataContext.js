import React, { createContext, useState } from "react";

const UserDataContext = createContext();

function UserDataContextProvider({ children }) {
    const [loggedInUserData, setLoggedInUserData] = useState('Nothing');

  return (
    <UserDataContext.Provider value={{ loggedInUserData, setLoggedInUserData}}>
      {children}
    </UserDataContext.Provider>
  );
}

export { UserDataContext, UserDataContextProvider };