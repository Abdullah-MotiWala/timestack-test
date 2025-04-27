import React, { createContext, useContext, useState } from "react";

type UserType = any;

interface UserContextProps {
  selectedUser: UserType | null;
  setSelectedUser: (user: UserType | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);

  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("User must be used within a UserProvider");
  return context;
};
