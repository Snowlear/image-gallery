import styled, { CSSProperties } from "styled-components";
import { ImageData } from "../../data/data";
import Button from "../atoms/Button";
import ImageBox from "../atoms/ImageBox";

const StyledText = styled.p`
  padding: 20px;
  word-break: break-all;
  white-space: normal;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #001fff9e;
  border-radius: 5px;
  background-color: #0008ff2b;
`;

const StyledPopUpWrapper = styled.div<PopUpProps>`
  top: 0px;
  background-color: #e5dfff69;
  position: absolute;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.data.isVisible ? "block" : "none")};
`;

const StyledPopUp = styled.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 600px;
  top: 10px;
  overflow: hidden;
  background-color: white;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
`;

export default function PopUp({
  styles,
  className,
  data,
  closeFunction,
}: PopUpProps) {
  let image = data.imageData;
  return (
    <StyledPopUpWrapper data={data}>
      <StyledPopUp className={className} style={styles}>
        <h3>{data.imageData && data.imageData.image_name}</h3>
        <ImageBox
          placeholderText={data.imageData && data.imageData.image_desc}
          url={data.imageData && data.imageData.image_url}
        ></ImageBox>
        <StyledText>{data.imageData && data.imageData.image_desc}</StyledText>
        <StyledButton onClick={() => closeFunction && closeFunction()}>
          Close
        </StyledButton>
      </StyledPopUp>
    </StyledPopUpWrapper>
  );
}

interface PopUpProps {
  data: PopUpData;
  styles?: CSSProperties;
  className?: string;
  closeFunction?: Function;
}

export interface PopUpData {
  isVisible: boolean;
  imageData?: ImageData;
}
