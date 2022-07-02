import React, { useState } from "react";

import Button from "../../Button/Button";
import Input from "../../Input/Input";
import { Form } from "../Form.styles";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    console.log("implement onsignup");
    e.preventDefault();
  };

  return (
    <>
      <h2>Sign up...</h2>
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
        <Input
          type="password"
          label="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />

        <Input
          type="text"
          label="Fullname"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />

        <Input
          type="text"
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <Button buttonText="Sign me up" />
      </Form>
    </>
  );
};

export default Signup;
