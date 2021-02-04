import React, { useState } from "react";

type userContextSchema = {
  user: {
    username?: string;
  };
  setUser: (key: any) => void;
};

export const UserContext = React.createContext<userContextSchema>({
  user: {},
  setUser: (_user: any) => {},
});

const UserContextProvider: React.FC = (props) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
