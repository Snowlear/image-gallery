import React from "react";
import { appData } from "../../data/data";
import { chunk } from "../../helpers/chunk";
import Body from "../atoms/Body";
import ImageBox from "../atoms/ImageBox";
import { StyledTable, StyledTableRow, StyledText } from "../atoms/Table";
import Wrapper from "../atoms/Wrapper";
import Header from "../molecules/Header";

export default function Index() {
  const columns = appData.slice(0, 4).map((image, idx) => {
    return (
      <th key={"col_" + image.image_name + "_" + idx}>{
        <React.Fragment>
        <ImageBox url={image.image_url}></ImageBox>
        <StyledText>{image.image_name}</StyledText>
        </React.Fragment>
      }</th>
    );
  });
  const rows = appData.slice(4, appData.length).map((image, idx) => {
    return (
      <StyledTableRow key={"row_" + image.image_name + "_" + idx}>
        <React.Fragment>
        <ImageBox url={image.image_url}></ImageBox>
        <StyledText>{image.image_name}</StyledText>
        </React.Fragment>
      </StyledTableRow>
    );
  });
  const chunkedRows = chunk(rows, 4).map((chunk: Array<any>, idx) => {
    return <tr key={"chunkRow_" + idx}>{chunk}</tr>;
  });

  console.log(chunkedRows);
  return (
    <div>
      <Body>
        <Header />
        <Wrapper>
          <StyledTable>
            <tbody>
              <tr>{columns}</tr>
              {chunkedRows}
            </tbody>
          </StyledTable>
        </Wrapper>
      </Body>
    </div>
  );
}
