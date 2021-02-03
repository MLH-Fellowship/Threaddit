import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";

const Chats = () => {
  return <h2>Chat Section</h2>;
};

export default withAuthenticator(Chats, true);
