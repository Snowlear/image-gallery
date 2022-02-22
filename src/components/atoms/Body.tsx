import styled from "styled-components";

const StyledBody = styled.div<{ minWidth: string | undefined }>`
  font-family: "Roboto";
  background-color: white;
  display: block;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  width: ${(props) => (props.minWidth || "1024") + "px"};
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
  }
`;

export default function Body({ children, minWidth }: BodyProps) {
  return <StyledBody minWidth={minWidth}>{children}</StyledBody>;
}

interface BodyProps {
  children?: any;
  minWidth?: string;
}
