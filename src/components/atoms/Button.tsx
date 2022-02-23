import styled from "styled-components";

const StyledButton = styled.button`
  margin: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <StyledButton onClick={() => onClick()} className={className}>
      {children}
    </StyledButton>
  );
}

interface ButtonProps {
  children?: any;
  onClick: Function;
  className?: string;
}
