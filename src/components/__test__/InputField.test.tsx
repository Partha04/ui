import React from "react";
import { render, screen } from "@testing-library/react";
import InputField from "../InputField";
import { verify } from "crypto";
import { mockComponent } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { debug } from "console";

describe("input field", () => {
  const label = "label";
  const name = "name";
  const placeholder = "placeholder";
  const onChangeMock = jest.fn();
  const value = "";

  const renderInput = () => {
    render(
      <InputField
        label={label}
        name={name}
        placeholder={placeholder}
        onChange={onChangeMock}
        value={value}
      />
    );
    // screen.logTestingPlaygroundURL();
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
    const type = "password";
    render(
      <InputField
        label={label}
        name={name}
        placeholder={placeholder}
        onChange={onChangeMock}
        value={value}
        type={type}
      />
    );
    const inputField = screen.getByLabelText(label);
    expect(inputField).toHaveAttribute("type", type);
  });

  test("should have a placeholder of given test", () => {
    renderInput();
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });
  test("should invoke the onChange method with the input value", () => {
    renderInput();
    const inputField = screen.getByLabelText(label);
    userEvent.type(inputField, "c");
    expect(onChangeMock).toBeCalledTimes(1);
  });

  test("should not have any error messages showing when not passed", () => {
    renderInput();
    expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();
  });
  test("should not have any error messages when error messges is empty", () => {
    renderInput();
    expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();
  });

  test("should have a error message text when errmessage is not null", () => {
    const errorMessage = "error message";
    render(
      <InputField
        label={label}
        name={name}
        placeholder={placeholder}
        onChange={onChangeMock}
        value={value}
        errorMessage={errorMessage}
      />
    );
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
