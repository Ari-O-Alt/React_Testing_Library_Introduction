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

// function to loop over the action of adding tasks to the page
const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo component", () => {
  //passes
  test("the to do appears in the list after being added", () => {
    render(<MockToDo />);
    addTask(["Walk the dog"]);
    const toDoListItem = screen.getByText(/Walk the dog/i);
    expect(toDoListItem).toBeInTheDocument();
  });

  // passed
  test("multiple to dos appear in the list after being added", () => {
    render(<MockToDo />);
    addTask([
      "Walk the dog",
      "Shop for groceries",
      "Water the plans",
      "Do the mail",
    ]);
    const toDoListItems = screen.getAllByTestId("task-container");
    expect(toDoListItems.length).toBe(4);
  });
});
