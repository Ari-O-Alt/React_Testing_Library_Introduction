import { render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

// we mock a function using Jest so we can pass it as a prop to AddInput
const mockSetTodos = jest.fn();

test("renders input element", () => {
  render(<AddInput todos={[]} setTodos={mockSetTodos} />);
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  expect(inputElement).toBeInTheDocument();
});
