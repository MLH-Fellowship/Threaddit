import React, { useContext, useEffect, useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Container, Button, Form, Row, Col, Card } from "react-bootstrap";
import { AuthContext } from "../../Store/AuthContext";
import { UserContext } from "../../Store/UserContext";
import Richtext from "../Slate/Richtext";
import { postMutation } from "./queries";
import { useHistory } from "react-router-dom";

const Chats = () => {
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);

  useEffect(() => {
    const setUserProfile = async () => {
      userContext.setUser(await authContext.checkAuth());
    };
    setUserProfile();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authContext]);

  const [title, setTitle] = useState("");
  const history = useHistory();

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    let content = localStorage.getItem("content");
    const postDetails = {
      title: title,
      user: userContext.user.username,
      description: `${content}`,
    };
    await postMutation(postDetails);
    history.push("/");
  };

  return (
    <Container fluid className="d-flex h-100 threaddit-heading">
      <Row className="mx-auto w-100">
        <Col xs="10" md="6" className="my-auto mx-auto">
          <h1>Create a Post</h1>
          <Form onSubmit={handleSubmit}>
            <Card className="text-center">
              <Card.Header>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
              </Card.Header>
              <Card.Body className="text-left">
                <Form.Group style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                  <Richtext />
                </Form.Group>
              </Card.Body>
              <Card.Footer>
                <Button type="submit" variant="secondary">
                  Post
                </Button>
              </Card.Footer>
            </Card>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default withAuthenticator(Chats);
