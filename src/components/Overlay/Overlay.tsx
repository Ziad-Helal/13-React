import { FC, ReactNode } from "react";

interface Overlay_Props {
  children: ReactNode;
}

export const Overlay: FC<Overlay_Props> = ({ children }) => {
  return (
    <div className="p-2 w-full max-w-[600px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
      {children}
    </div>
  );
};
