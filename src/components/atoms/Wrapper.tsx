import styled from "styled-components";

const StyledWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  font-size: 15px;
`;

export default function Wrapper({ children }: WrapperProps) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

interface WrapperProps {
  children?: any;
}
