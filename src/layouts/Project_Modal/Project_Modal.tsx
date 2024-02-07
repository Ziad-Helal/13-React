import { createPortal } from "react-dom";
import { Backdrop, Overlay } from "../../components";
import { FC } from "react";

interface Project_Modal_Props {
  image: string;
  onClose: VoidFunction;
}

export const Project_Modal: FC<Project_Modal_Props> = ({ image, onClose }) => {
  return (
    <>
      {createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById("backdrop-root")!
      )}
      {createPortal(
        <Overlay>
          <img src={image} alt="Project" />
        </Overlay>,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};
