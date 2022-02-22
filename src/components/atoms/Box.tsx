import styled, { CSSProperties } from "styled-components";

export default function Box({ children, styles }: BoxProps) {
  return <div style={styles}>{children}</div>;
}

interface BoxProps {
  children?: any;
  styles?: CSSProperties;
}
