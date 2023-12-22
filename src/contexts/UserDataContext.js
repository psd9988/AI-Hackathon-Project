import React, { createContext, useState, useEffect } from "react";

const UserDataContext = createContext();

function UserDataContextProvider({ children }) {
    const [loggedInUserData, setLoggedInUserData] = useState(null);



  return (
    <UserDataContext.Provider value={{ loggedInUserData, setLoggedInUserData}}>
      {children}
    </UserDataContext.Provider>
  );
}

export { UserDataContext, UserDataContextProvider };