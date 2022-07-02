import { rem } from "polished";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../Components/Button/Button";
import Login from "../../Components/Form/Login/Login";
import Signup from "../../Components/Form/Signup/Signup";

const FormToggler = styled.div`
  display: flex;
  gap: 12px;
`;

const AuthContainer = styled.div`
  max-width: 500px;
  margin: auto;
  padding: ${rem(16)};
  border: solid;
  border-radius: 5px;
`;

const Auth: React.FC = () => {
  const [showSignup, setShowSignup] = useState(true);

  const handleFormToggle = (e: any) => {
    if (e.target.innerText === "SignUp") {
      setShowSignup(true);
    } else setShowSignup(false);
  };
  console.log("rendering");
  return (
    <AuthContainer>
      <FormToggler>
        <Button onClick={handleFormToggle} active={showSignup}>
          SignUp
        </Button>
        <Button onClick={handleFormToggle} active={!showSignup}>
          Login
        </Button>
      </FormToggler>
      {showSignup && <Signup />}
      {!showSignup && <Login />}
    </AuthContainer>
  );
};

export default Auth;
