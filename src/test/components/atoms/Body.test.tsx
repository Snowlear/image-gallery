import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Body from "../../../components/atoms/Body";

test("renders Body component title", () => {
  render(<Body>Test</Body>);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Body component style", () => {
  render(<Body>Test</Body>);
  const linkElement = screen.getByText(/Test/i);

  expect(linkElement).toHaveStyle(`font-family: "Roboto";
  background-color: white;
  display: block;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;`);
});
