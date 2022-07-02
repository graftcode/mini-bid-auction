import React, { useState } from "react";

import Button from "../../Button/Button";
import Input from "../../Input/Input";
import { Form } from "../Form.styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    console.log("implement onlogin");
    e.preventDefault();
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
        <Button buttonText="Log me in" />
      </Form>
    </>
  );
};

export default Login;
