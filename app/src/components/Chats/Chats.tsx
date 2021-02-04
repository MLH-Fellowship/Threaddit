import React, { useContext, useEffect, useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Container, Button, Form } from "react-bootstrap";
import { AuthContext } from "../../store/AuthContext";
import Richtext from "../Slate/Richtext";

const Chats = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.checkAuth();
  }, [authContext]);

  const [title, setTitle] = useState("");
  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    let content = localStorage.getItem("content");
    //TODO: save to database
    console.log(content);
    console.log(title);
  };

  return (
    <Container fluid="md" style={{ padding: "50px" }}>
      <h2>Create a Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Control type="text" placeholder="Title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          </Form.Group>
          <Form.Group style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} >
            <Richtext/>
        </Form.Group>
        <Button type="submit" variant="secondary">Post</Button>
  
      </Form>
    </Container>
  );
};

export default withAuthenticator(Chats);
