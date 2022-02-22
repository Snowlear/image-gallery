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

interface StyledButtonProps {
  type?: "positive" | "negative" | "basic";
}

export const ColouredStyledButton = styled(Button)<StyledButtonProps>`
  display: flex;
  justify-content: center;
  border-radius: 30px;
  font-size: 20px;
  width: 150px;
  ${(props) =>
    props.type === "positive" &&
    `
    border: 1px solid #0fff009e;
    background-color: #28ff002b;`}
  ${(props) =>
    props.type === "negative" &&
    `
    border: 1px solid #ff00002b;
    background-color: #ff00002b;`}
`;

interface ButtonProps {
  children?: any;
  onClick: Function;
  className?: string;
}
