import React, { useEffect, useMemo, useState } from "react";
import {listQuery} from "../Chats/queries";
import { Editable, withReact, useSlate, Slate } from "slate-react";
import {
  Editor,
  Transforms,
  createEditor,
  Node,
  Element as SlateElement,
} from "slate";
import { withHistory } from "slate-history";


const Home = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [data, setData] = useState("");
  let posts:any[] = [];
  let listPosts; 
  useEffect(() => {
    async function getPosts() {
      const data = await listQuery()
      setData(data)
      console.log(data)
      posts = JSON.parse(data).data.listPosts.items
      console.log("title: "+posts[0].title)
      listPosts = posts.map((post:any) => <li key={post.title.toString()}>{post.title}</li>)
      console.log("posts"+JSON.stringify(listPosts))
  }
  getPosts();
  }, [])

// 
  return( <div>
  <h2>Welcome to Threaddit!</h2>
  <ul>{listPosts}</ul>
  <div style={{ userSelect: "none" }} contentEditable={false}>
   
  <ul>{posts.map((post:any) => <li key={post.title.toString()}>{post.title}</li>)}</ul>
  <Slate style={{ userSelect: "none" }} contentEditable={false}
      editor={editor}
      value={JSON.parse('[{\"type\":\"paragraph\",\"children\":[{\"text\":\"cooontent\"}]}]')}
      onChange={value => {
        console.log(value)
      }}
    >
      <Editable style={{ userSelect: "none" }} contentEditable={false}/>
    </Slate>
    </div>
  </div>);
};

export default Home;

/*
value={JSON.parse('[{\"type\":\"paragraph\",\"children\":[{\"text\":\"cooontent\"}]}]')}
*/