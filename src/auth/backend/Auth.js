// Fonctionnalité // 
import React, { useEffect, useState } from "react";
import database from "./database";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

// Chargement // 
  useEffect(() => {
    database.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
    });
  }, []);


// Si l'utilisateur c'est déjà connecté ; il le reconnecte
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