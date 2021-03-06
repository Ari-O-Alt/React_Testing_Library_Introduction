import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const MockApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

test("renders learn react link", () => {
  render(<MockApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// -------------------------------------------------------TEST STRUCTURE------------------------------------------

// we can use test() or it() for the test block
// we need to tell the test what component we need to render for testing ==>   render(<App />);
// we need to find the elements we want to interact with ==>  const linkElement = screen.getByText(/learn react/i);
// we need to interact with those elements ==> no interaction in this specific test
// we must assert that the results are as we expected ==> expect(linkElement).toBeInTheDocument();

// -------------------------------------------------------SELECTORS-----------------------------------------------

// getBy - finds one, returns one, finds more, returns error // NO MATCH, returns error // AWAIT No
// findBy - finds one, returns one, finds more, returns error // NO MATCH, returns error // AWAIT Yes
// queryBy - finds one, returns one, finds more, returns error // NO MATCH, returns null // AWAIT No

// getAllBy - finds one, returns array, find more, returns array // NO MATCH, returns error // AWAIT No
// findAllBy - finds one, returns array, find more, returns array // NO MATCH, returns error // AWAIT Yes
// queryAllBy - finds one, returns array, find more, returns array // NO MATCH, returns array // AWAIT No

// ---------------------------------------------------ATTRIBUTES' PRIORITY-----------------------------------------------
// 1. Attributes accessible to every user ==> e.g getByRole, getByLabelText, getByPlaceholderText, getByText etc
// 2. Semantic queries ==> e.g getByAltText, getByTitle
// 3. Test id ==> e.g getByTestId
