import React, { useState } from "react";
import styled from "styled-components";
import Login from "../../Components/Form/Login/Login";
import Signup from "../../Components/Form/Signup/Signup";

const FormToggler = styled.div`
  display: flex;
`;

const Auth: React.FC = () => {
  const [showSignup, setShowSignup] = useState(true);

  const handleFormToggle = () => setShowSignup(!showSignup);

  return (
    <>
      <FormToggler>
        <button onClick={handleFormToggle}>SignUp</button>
        <button onClick={handleFormToggle}>Login</button>
      </FormToggler>
      {showSignup && <Signup />}
      {!showSignup && <Login />}
    </>
  );
};

export default Auth;
