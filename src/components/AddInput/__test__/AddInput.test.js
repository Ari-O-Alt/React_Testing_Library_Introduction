import { render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

test("renders learn react link", () => {
  render(<AddInput />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
