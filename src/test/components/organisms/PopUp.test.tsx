import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PopUp from "../../../components/organisms/PopUp";

const mockData = {
  isVisible: true,
  imageData: {
    image_name: "Image Name",
    image_url: "https://via.placeholder.com/150x200",
    image_desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
};

test("renders PopUp component image title", () => {
  render(<PopUp data={mockData} />);
  const linkElement = screen.getByText(/Image Name/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders PopUp Button component style", async () => {
  const { getByRole } = await render(<PopUp data={mockData} />);
  const linkElement = getByRole("button");

  expect(linkElement).toHaveStyle(`margin-left: auto;
  margin-right: auto;
  border: 1px solid #001fff9e;
  border-radius: 5px;
  background-color: #0008ff2b;`);
});
