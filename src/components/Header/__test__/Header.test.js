import { render, screen } from "@testing-library/react";
import Header from "../Header";

// GET BY
// Passes
test("should render the same text passed into the title prop", () => {
  render(<Header title={"My Header"} />);
  const headingElement = screen.getByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

// Passes - only if we specify the text of the heading we wanna target
test("should render the H3 element", () => {
  render(<Header />);
  const headingElement = screen.getByRole("heading", { name: "Header 3" });
  expect(headingElement).toBeInTheDocument();
});

// Passes - only if we specify the title of the heading we wanna target
test("should render the H2 element", () => {
  render(<Header title={"My Header"} />);
  const headingElement = screen.getByTitle("Target This");
  expect(headingElement).toBeInTheDocument();
});

// FIND BY - remember it is async
// Passes
test("should render the same text passed into the title prop", async () => {
  render(<Header title={"My Header"} />);
  const headingElement = await screen.findByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

// QUERY BY
// Passes
test("should render the same text passed into the title prop", () => {
  render(<Header title={"My Header"} />);
  const headingElement = screen.queryByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

// Passes - queryByText returns null and we check for the element NOT to be on the page
test("should not display anything", () => {
  render(<Header title={"My Header"} />);
  const headingElement = screen.queryByText(/Dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});

// Passes
test("should display 3 headings", () => {
  render(<Header />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(3);
});
