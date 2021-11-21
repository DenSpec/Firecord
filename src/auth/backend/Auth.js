// Fonctionnalité // 
import React, { useEffect, useState } from "react";
import database from "./database";

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    database.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};