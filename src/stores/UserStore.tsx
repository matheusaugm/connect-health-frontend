import React, { ReactNode, useContext, useState, useEffect } from "react";

interface UserContextInterface {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  user: UserProps | null;
  setUser: (value: UserProps | null) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserProps {
  username: string;
  password: string;
  email: string;
  phoneNumber?: string;
  healthInsurance: string;
  birthDate: string;
  bloodType: string;
  comorbities: string;
  userSex: string;
}

const UserContext = React.createContext<UserContextInterface>(
  {} as UserContextInterface,
);

function UserProvider({ children }: UserProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedUser && storedAuth) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(storedAuth === "true");
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser(): UserContextInterface {
  return useContext(UserContext);
}

export { UserProvider, UserContext, useUser };
