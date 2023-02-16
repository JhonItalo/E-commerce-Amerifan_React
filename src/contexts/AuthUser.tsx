import React, { createContext, useEffect, useState } from "react";
import { LoginRequest, setUserLocalStorage, getUserLocalStorage } from "../request/LoginRequest";
import { user } from "../types/types";

export interface contextAuthUser extends user {
     authentication: (email: string, password: string) => Promise<void>;
     logout: () => void;
}
export const AuthUserContext = createContext<contextAuthUser>({} as contextAuthUser);

type props = {
     children: React.ReactNode;
};
export const AuthUserProvider = ({ children }: props) => {
     const [user, setUser] = useState<user | null>(null);

     useEffect(() => {
          const user = getUserLocalStorage();
          if (user) {
               setUser(user);
          }
     }, []);

     const authentication = async (email: string, password: string) => {
          const response = await LoginRequest(email, password);
          const payload = { token: response, email };
          setUserLocalStorage(payload);
          setUser(payload);
     };

     const logout = async () => {
          setUserLocalStorage(null);
          setUser(null);
     };

     return <AuthUserContext.Provider value={{ ...user, authentication, logout }}>{children}</AuthUserContext.Provider>;
};
