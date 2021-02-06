import React, { useContext, useEffect, useMemo, useState } from "react";
import { listQuery } from "../Chats/queries";
import { Editable, withReact, Slate } from "slate-react";
import { Card, Accordion, Container, Row, Col } from "react-bootstrap";
import { ChatRightTextFill } from "react-bootstrap-icons";
import { Element, Leaf } from "../Slate/Richtext";
import { AuthContext } from "../../Store/AuthContext";
import { createEditor } from "slate";

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
    }
    getPosts();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authContext = useContext(AuthContext);

  return authContext.isAuth ? (
    <div>
      <h2 className="text-center mt-5 threaddit-heading">
        Welcome to Threaddit!
      </h2>
      <h6 className="text-center mt-0 pb-2 threaddit-heading">
        Here are some posts for you!
      </h6>
      <div style={{ userSelect: "none" }} contentEditable={false}>
        <ul>
          <Accordion defaultActiveKey="0">
            {posts.map((post: PostSchema, index) => (
              <Card
                className="mt-5 mx-5 border-bottom postcard"
                border="secondary"
                key={index}
              >
                <Card.Header>
                  <Accordion.Toggle as={Card.Header} eventKey={post.id}>
                    {post.title}
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
                <Card.Footer className="mb-2 text-muted">
                  Posted by u/{post.user}
                </Card.Footer>
              </Card>
            ))}
          </Accordion>
        </ul>
      </div>
    </div>
  ) : (
    <>
      <Container fluid className="text-center h-100 d-flex threaddit-heading">
        <Row className="mx-auto w-100">
          <Col xs="10" md="8" className="my-auto mx-auto">
            <h1 className="display-3">
              <span>
                <ChatRightTextFill color="grey" />
              </span>{" "}
              Threaddit
            </h1>
          </Col>
          <Col xs="10" md="8" className="my-auto mx-auto">
            <h3 className="display-5">Your place to share!</h3>
          </Col>
          <Col xs="10" md="8" className="my-auto mx-auto pt-5">
            <h4>What is threaddit?</h4>
            <p>
              Threaddit is a place to share your thoughts, and interact with
              your friends!<br></br>
              Threaddit maintains a single thread of all the stories and posts
              people around the world share!
              <br></br>
              <a href="/post">Login</a> to enter the beautiful world of
              Threaddit!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
