import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Wrapper from "../../../components/atoms/Wrapper";

test("renders Wrapper component title", () => {
  render(<Wrapper>Test</Wrapper>);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Wrapper component style", () => {
  render(<Wrapper>Test</Wrapper>);
  const linkElement = screen.getByText(/Test/i);

  expect(linkElement).toHaveStyle(`padding-left: 20px;
  padding-right: 20px;
  font-size: 15px;`);
});
