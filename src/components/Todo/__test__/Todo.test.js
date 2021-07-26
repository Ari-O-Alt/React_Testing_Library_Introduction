import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockToDo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

describe("Todo component", () => {
  //passes
  test("the to do appears in the list after being added", () => {
    render(<MockToDo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Walk the dog" } });
    fireEvent.click(buttonElement);
    const toDoListItem = screen.getByText(/Walk the dog/i);
    expect(toDoListItem).toBeInTheDocument();
  });
});
