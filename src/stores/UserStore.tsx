import React, { ReactNode, useContext, useState } from "react";

interface UserContextInterface {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = React.createContext<UserContextInterface>(
  {} as UserContextInterface,
);

function UserProvider({ children }: UserProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <UserContext.Provider
      value={{
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
