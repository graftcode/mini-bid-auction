import axios from "axios";
import React, { useState } from "react";

import Button from "../../Button/Button";
import Input from "../../Input/Input";
import { Form } from "../Form.styles";

const Login = () => {
  const [email, setEmail] = useState("abdi@mongodb.com");
  const [password, setPassword] = useState("123456");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    console.log("implement onlogin");
    e.preventDefault();

    await axios
      .post("http://localhost:4500/auth/login", {
        email,
        password,
      })
      .then((data) => {
        console.log(data.headers["auth-token"]);
        return data.headers["auth-token"];
      })
      .then((token) => {
        axios
          .get("http://localhost:4500/api/items", {
            headers: { "auth-token": token },
          })
          .then((data) => console.log(data));
      });
  };

  return (
    <>
      <h2>Log in...</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Input
          type="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button>Log me in</Button>
      </Form>
    </>
  );
};

export default Login;
