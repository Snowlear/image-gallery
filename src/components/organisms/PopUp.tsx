import styled, { CSSProperties } from "styled-components";

export default function PopUp({ styles, className }: PopUpProps) {
  return <div className={className} style={styles}>
      <p>Pop up here !</p>
  </div>;
}

interface PopUpProps {
  styles?: CSSProperties;
  className?: string;
}
