import React, { useEffect, useState } from "react";
import {listQuery} from "../Chats/queries"

const Home = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    async function getPosts() {
      const data = await listQuery()
      setData(data)
  }
  getPosts();
  }, [])

  return( <div>
  <h2>Welcome to Threaddit!</h2>
  <div>{data}</div>
  </div>);
};

export default Home;