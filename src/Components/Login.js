import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/login";
import { Form, Input, Label, Button } from "./Login.styled";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <>
      <Form className="anime" onSubmit={handleSubmit}>
        <p style={{ background: "#c8a9db" }}>user:dog pass:dog</p>
        <Label htmlFor="username">Usuário:</Label>
        <Input
          id="username"
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />

        <Label htmlFor="password">Senha:</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <Button>Enviar</Button>
      </Form>
    </>
  );
};

export default Login;
