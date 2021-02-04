import React from "react";
import {listQuery} from "../Chats/queries"

const Home = () => {
  return <div>
  <h2>Welcome to Threaddit!</h2>
  <button onClick={listQuery}>GraphQL Query</button>
  </div>;
};

export default Home;
