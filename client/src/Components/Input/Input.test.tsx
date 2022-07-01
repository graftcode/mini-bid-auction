import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("<Input/>", () => {
  const mockProps = {
    value: "test value",
    label: "test",
    type: "text",
    onChange: jest.fn(),
  };
  test("renders Input", () => {
    render(<Input {...mockProps} />);
  });

  test("renders Input", () => {
    const mockProps = {
      value: "test value",
      label: "test",
      type: "text",
      onChange: jest.fn(),
    };

    const { getByTestId } = render(<Input {...mockProps} />);

    getByTestId("input");

    expect(screen.getByDisplayValue("test value")).toBeInTheDocument();
  });
});
