import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "../../../components/pages";

test("renders image text", () => {
  render(<Index />);
  const linkElement = screen.getByText(/image/i);
  expect(linkElement).toBeInTheDocument();
});
