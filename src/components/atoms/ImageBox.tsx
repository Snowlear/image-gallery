import styled, { CSSProperties } from "styled-components";

const StyledImage = styled.img<ImageBoxProps>`
max-width:100%;
max-height:100%;
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
