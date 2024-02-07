import { FC } from "react";

interface Backdrop_Props {
  onClick: VoidFunction;
}

export const Backdrop: FC<Backdrop_Props> = ({ onClick }) => {
  return (
    <div
      className="fixed inset-0 bg-[rgba(13,110,253,0.25)] z-30"
      onClick={onClick}
    ></div>
  );
};
