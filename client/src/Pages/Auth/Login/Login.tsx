import React, { useState } from "react";
import Input from "../../../Components/Input/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  return (
    <Input
      type="email"
      label="Email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
    />
  );
};

export default Login;
