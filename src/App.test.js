import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// we can use test() or it() for the test block
// we need to tell the test what component we need to render for testing ==>   render(<App />);
// we need to find the elements we want to interact with ==>  const linkElement = screen.getByText(/learn react/i);
// we need to interact with those elements ==> no interaction in this specific test
// we must assert that the results are as we expected ==> expect(linkElement).toBeInTheDocument();
