import styled, { CSSProperties } from "styled-components";

const StyledTextArea = styled.p``;

export default function TextArea({
  className,
  children,
  styles,
}: TextAreaProps) {
  return (
    <StyledTextArea className={className} style={styles}>
      {children}
    </StyledTextArea>
  );
}

interface TextAreaProps {
  className?: string;
  children?: any;
  styles?: CSSProperties;
}
