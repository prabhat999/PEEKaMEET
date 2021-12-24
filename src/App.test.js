import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const MockApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
test("Checking if routes are working or not", () => {
  render(<MockApp />);
});
