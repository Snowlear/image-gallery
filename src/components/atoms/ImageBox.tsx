import styled, { CSSProperties } from "styled-components";

const StyledImage = styled.img<ImageBoxProps>`
  height: 100%;
  width: auto;
  ${(props) =>
    props.isInitial &&
    `
    width: 100%`}
`;

export default function ImageBox({
  url,
  styles,
  placeholderText,
  className,
  isInitial,
}: ImageBoxProps) {
  return (
    <StyledImage
      isInitial={isInitial}
      className={className}
      src={url}
      alt={placeholderText}
      style={styles}
    />
  );
}

interface ImageBoxProps {
  isInitial?: boolean;
  className?: string;
  placeholderText?: string;
  url?: any;
  styles?: CSSProperties;
}
