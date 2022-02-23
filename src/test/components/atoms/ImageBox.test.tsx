import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ImageBox from "../../../components/atoms/ImageBox";

test("renders ImageBox component to ensure src placement is correct.", async () => {
  const { getByAltText } = await render(
    <ImageBox placeholderText="image" url="test_url" />
  );
  const image = getByAltText("image");
  expect(image).toHaveAttribute("src", "test_url");
});

test("renders ImageBox component style", async () => {
  const { getByAltText } = await render(
    <ImageBox placeholderText="image" url="test_url" />
  );
  const image = getByAltText("image");

  expect(image).toHaveStyle(`  max-width: 100%;
  max-height: 100%;`);
});
