import React, { useEffect, useMemo, useState } from "react";
import { listQuery } from "../Chats/queries";
import { Editable, withReact, useSlate, Slate } from "slate-react";
import {
  Editor,
  Transforms,
  createEditor,
  Node,
  Element as SlateElement,
} from "slate";
import { withHistory } from "slate-history";

interface PostSchema {
  title: string;
  description: string;
  id: string;
  user: string;
}

const Home = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [posts, setPosts] = useState<Array<PostSchema>>([]);
  useEffect(() => {
    async function getPosts() {
      const data = await listQuery();
      setPosts(JSON.parse(data).data.listPosts.items);
      console.log(posts);
    }
    getPosts();
  }, []);

  //
  return (
    <div>
      <h2>Welcome to Threaddit!</h2>
      <div style={{ userSelect: "none" }} contentEditable={false}>
        <ul>
          {posts.map((post: PostSchema) => (
            <li key={post.id.toString()}>
              <h1>{post.title}</h1>
              <Slate
                style={{ userSelect: "none" }}
                contentEditable={false}
                editor={editor}
                value={JSON.parse(`${post.description}`)}
                onChange={(value) => {
                  return;
                }}
              >
                <Editable
                  style={{ userSelect: "none" }}
                  contentEditable={false}
                />
              </Slate>
              <p>{post.user}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

/*
value={JSON.parse('[{\"type\":\"paragraph\",\"children\":[{\"text\":\"cooontent\"}]}]')}
*/
