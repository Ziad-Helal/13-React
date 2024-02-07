import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FC, ReactNode } from "react";

interface Main_PageHero_Props {
  title: string;
  children: ReactNode;
  normal?: boolean;
  home?: boolean;
  imgSrc?: string;
}

export const Main_PageHero: FC<Main_PageHero_Props> = ({
  title,
  children,
  normal = false,
  home = false,
  imgSrc,
}) => {
  return (
    <main
      className={`min-h-screen text-center px-4 pt-24 pb-6 ${
        normal
          ? "text-primary"
          : "text-background bg-secondary flex justify-center items-center"
      }`}
    >
      <div className="container mx-auto">
        {home && (
          <img
            src={imgSrc}
            alt="User Avatar"
            width="250"
            className="mx-auto mb-8"
          />
        )}
        <h2 className="uppercase font-bold text-3xl sm:text-4xl">{title}</h2>
        <div
          className={`flex items-center justify-center gap-4 my-4 after:block after:w-20 after:py-0.5 ${
            normal ? "after:bg-primary" : "after:bg-background"
          } before:block before:w-20 before:py-0.5 ${
            normal ? "before:bg-primary" : "before:bg-background"
          }`}
        >
          <FontAwesomeIcon icon={faStar} />
        </div>
        {children}
      </div>
    </main>
  );
};
