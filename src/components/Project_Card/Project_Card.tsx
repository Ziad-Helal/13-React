import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Project_Modal } from "../../layouts";

interface Project_Card_Props {
  image: string;
}

export const Project_Card: FC<Project_Card_Props> = ({ image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="rounded-lg overflow-hidden relative">
      <img src={image} alt="Project" />
      <div
        className="absolute inset-0 text-background bg-[#1abc9ce6] cursor-pointer opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-500"
        onClick={() => setModalIsOpen(true)}
      >
        <FontAwesomeIcon icon={faPlus} size="6x" />
      </div>
      {modalIsOpen && (
        <Project_Modal image={image} onClose={() => setModalIsOpen(false)} />
      )}
    </div>
  );
};
