import React, { useEffect, useMemo, useState } from "react";
import { listQuery } from "../Chats/queries";
import { Editable, withReact, useSlate, Slate } from "slate-react";
import { Card, Accordion, AccordionToggle, Button} from "react-bootstrap";
import { Element, Leaf } from "../Slate/Richtext";
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
      <h2 className="text-center mt-5">Welcome to Threaddit!</h2>
      <div style={{ userSelect: "none" }} contentEditable={false}>
        <ul>
        <Accordion defaultActiveKey="0">
          {posts.map((post: PostSchema) => (
           
            <Card className="mt-5 mx-5 border-bottom" border="secondary" >
              <Card.Header>
              <Accordion.Toggle as={Card.Header} eventKey={post.id}>{post.title}
                </Accordion.Toggle>
                </Card.Header>
                
                <Accordion.Collapse eventKey={post.id}>
                  <Card.Body>
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
                  renderElement={Element}
                  renderLeaf={Leaf}
                  readOnly={true}
                />
              </Slate>
                  </Card.Body>
              </Accordion.Collapse>
              <Card.Footer className="mb-2 text-muted">Posted by u/{post.user}</Card.Footer>
            </Card>
            
          ))}
          </Accordion>
        </ul>
      </div>
    </div>
  );
};

export default Home;

/*
value={JSON.parse('[{\"type\":\"paragraph\",\"children\":[{\"text\":\"cooontent\"}]}]')}
*/
