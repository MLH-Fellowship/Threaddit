import React, { useState } from "react";
import { Auth } from "aws-amplify";

export const AuthContext = React.createContext({
  isAuth: false,
  setIsAuth: (_isAuth: boolean) => {},
  checkAuth: () => {},
});

const AuthContextProvider: React.FC = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const checkAuth = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      setIsAuth(true);
    } catch (err) {
      setIsAuth(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, checkAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
