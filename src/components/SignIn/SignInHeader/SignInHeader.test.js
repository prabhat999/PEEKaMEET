import { render, screen } from "@testing-library/react";
import SignInHeader from "./SignInHeader";

test("App Name", () => {
  render(<SignInHeader />);

  const outputElement = screen.getByText("PEEKaMEET");

  expect(outputElement).toBeInTheDocument();
});
