import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignInBody from "./SignInBody";

const MockSignInBody = () => {
  return (
    <BrowserRouter>
      <SignInBody />
    </BrowserRouter>
  );
};
describe("Validation is working or not", () => {
  test("Email Validation is working or not", () => {
    render(<MockSignInBody />);
    const inputElement = screen.getByPlaceholderText("Email");
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.click(buttonElement);
    const opElement = screen.getByText(
      "*Email or Password can't be left empty",
      {
        exact: false,
      }
    );
    expect(opElement).toBeInTheDocument();
  });
  test("Password Validation is working or not", () => {
    render(<MockSignInBody />);
    const inputElement = screen.getByPlaceholderText("Password");
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.click(buttonElement);
    const opElement = screen.getByText(
      "*Email or Password can't be left empty",
      {
        exact: false,
      }
    );
    expect(opElement).toBeInTheDocument();
  });
  test("Login with given email only", () => {
    render(<MockSignInBody />);
    const inputEmail = screen.getByPlaceholderText("Email");
    const inputPass = screen.getByPlaceholderText("Password");

    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputEmail, {
      target: { value: "bhagyashree.srivastava@daffodilsw.com" },
    });
    fireEvent.change(inputPass, {
      target: { value: "Hrhk@1234567" },
    });
    fireEvent.click(buttonElement);
    const opElement = screen.getByText("*Email or Password incorrect", {
      exact: false,
    });
    expect(opElement).toBeInTheDocument();
  });
  test("Password Field Validation", () => {
    render(<MockSignInBody />);
    const inputEmail = screen.getByPlaceholderText("Email");
    const inputPass = screen.getByPlaceholderText("Password");

    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputEmail, {
      target: { value: "xyz@gmail.com" },
    });
    fireEvent.change(inputPass, {
      target: { value: "qw12" },
    });
    fireEvent.click(buttonElement);
    const opElement = screen.getByText("*Enter Valid Password", {
      exact: false,
    });
    expect(opElement).toBeInTheDocument();
  });
});
