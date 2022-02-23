import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../../../components/atoms/Button";

test("renders Button component title", () => {
  render(<Button onClick={() => {}}>Test</Button>);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Button component style", () => {
  render(<Button onClick={() => {}}>Test</Button>);
  const linkElement = screen.getByText(/Test/i);

  expect(linkElement).toHaveStyle(`margin: 10px;
  padding: 10px;
  display: flex;
  align-items: center;`);
});
