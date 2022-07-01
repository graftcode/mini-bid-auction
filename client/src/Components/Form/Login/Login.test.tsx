import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("<Login/>", () => {
  test("renders Login", () => {
    render(<Login />);
  });
});
