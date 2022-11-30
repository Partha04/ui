import React from "react";
import { render, screen } from "@testing-library/react";
import InputField from "../InputField";

describe("input field", () => {
  const label = "label";
  const name = "name";
  const placeholder = "placeholder";

  const renderInput = () => {
    render(<InputField label={label} name={name} placeholder={placeholder} />);
  };

  test("should have a label with given label", () => {
    renderInput();
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test("should have a input field with given label and name", () => {
    renderInput();
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  test("should change the type of the input based on the type", () => {
    render(<InputField label={label} name={name} type="password"/>)
    const inputField= screen.getByLabelText(label);
    expect(inputField).toHaveAttribute("type","password");
  });
  test('should have a placeholder of given test', () => { 
    renderInput();
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  })
});
