import React, { useContext, useEffect } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { AuthContext } from "../../store/AuthContext";
const Chats = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.checkAuth();
  }, [authContext]);

  return <h2>Chat Section</h2>;
};

export default withAuthenticator(Chats, true);
