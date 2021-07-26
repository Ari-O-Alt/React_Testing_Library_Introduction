import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

// we mock a function using Jest so we can pass it as a prop to AddInput
const mockSetTodos = jest.fn();

describe("Tests for the AddInput component", () => {
  //passes
  test("renders input element", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });
});

//passes
test("should be able to type in the input", () => {
  render(<AddInput todos={[]} setTodos={mockSetTodos} />);
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  fireEvent.change(inputElement, { target: { value: "Walk the dog" } });
  expect(inputElement.value).toBe("Walk the dog");
});

//passes
test("should have emtpy input when the button is clicked", () => {
  render(<AddInput todos={[]} setTodos={mockSetTodos} />);
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  fireEvent.change(inputElement, { target: { value: "Walk the dog" } });
  fireEvent.click(buttonElement);
  expect(inputElement.value).toBe("");
});
