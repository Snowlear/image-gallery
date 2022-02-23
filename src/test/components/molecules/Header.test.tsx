import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../../../components/molecules/Header";

test("renders Header component title", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Image Gallery/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Header component style", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Image Gallery/i);

  expect(linkElement).toHaveStyle(`color: black;
  margin: 0px;
  font-size: 16px;
  font-weight: 600;`);
});
