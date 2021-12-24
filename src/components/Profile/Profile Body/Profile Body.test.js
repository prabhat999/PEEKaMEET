import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProfileBody from "./Profile Body";

const MockProfileBody = () => {
  return (
    <BrowserRouter>
      <ProfileBody />
    </BrowserRouter>
  );
};
describe("Details and Notes are rendering or not", () => {
  test("Details Components is rendering or not", () => {
    render(<MockProfileBody />);

    const outputElement = screen.getByText("Details");
    expect(outputElement).toBeInTheDocument();
  });
  test("Notes Components is rendering or not", () => {
    render(<MockProfileBody />);

    const outputElement = screen.getByText("Notes");
    expect(outputElement).toBeInTheDocument();
  });
});
