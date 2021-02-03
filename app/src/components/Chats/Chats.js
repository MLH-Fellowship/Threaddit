import React, { useContext, useEffect, useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { AuthContext } from "../../store/AuthContext";
import Richtext from "../Slate/Richtext";

const Chats = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.checkAuth();
  }, [authContext]);

  const [title, setTitle] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let content = localStorage.getItem('content');
    //TODO: save to database
    console.log(content);
    console.log(title);
}

  return <div>
    <form  onSubmit={handleSubmit}>
    <label>
    Title
    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
  </label>
    <Richtext/>
    <input type="submit" value="Submit" />
    </form>
  </div>;
};

export default withAuthenticator(Chats, true);
