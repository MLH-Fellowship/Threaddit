import React, { useContext, useEffect, useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Container, Button, Form } from "react-bootstrap";
import { AuthContext } from "../../Store/AuthContext";
import { UserContext } from "../../Store/UserContext";
import Richtext from "../Slate/Richtext";
import { postMutation } from "./queries";

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

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    let content = localStorage.getItem("content");
    const postDetails = {
      title: title,
      user: userContext.user.username,
      description: content,
    };
    postMutation(postDetails);
  };

  return (
    <Container fluid="md" style={{ padding: "50px" }}>
      <h2>Create a Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
          <Richtext />
        </Form.Group>
        <Button type="submit" variant="secondary">
          Post
        </Button>
      </Form>
    </Container>
  );
};

export default withAuthenticator(Chats);
