import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("renders the header", () => {
  render(<Header title={"My Header"} />);
  const headingElement = screen.getByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});
