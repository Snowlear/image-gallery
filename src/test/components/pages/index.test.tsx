import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Index from "../../../components/pages";

test("renders Image Gallery title", () => {
  render(<Index />);
  const linkElement = screen.getByText(/Image Gallery/i);
  expect(linkElement).toBeInTheDocument();
});
