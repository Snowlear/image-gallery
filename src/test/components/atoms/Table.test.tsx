import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {
  StyledTable,
  StyledTableRow,
  StyledText,
} from "../../../components/atoms/Table";

test("renders StyledTable component style", async () => {
  const { getByRole } = await render(
    <StyledTable placeholder="test_table"></StyledTable>
  );
  const linkElement = getByRole("table");

  expect(linkElement).toHaveStyle(`table-layout: fixed;
  width: 100%;
  border-collapse: separate;
  border-spacing: 10px 10px;`);
});

test("renders StyledTableRow component style", async () => {
  const { getByRole } = await render(
    <StyledTable placeholder="test_table">
      <tbody>
        <tr>
          <StyledTableRow></StyledTableRow>
        </tr>
      </tbody>
    </StyledTable>
  );
  const linkElement = getByRole("cell");

  expect(linkElement).toHaveStyle(`text-align: center;
  border-spacing: 0px 0px;`);
});

test("renders StyledText component style", async () => {
  await render(<StyledText>TestText</StyledText>);
  expect(screen.getByText("TestText")).toBeInTheDocument();
});
