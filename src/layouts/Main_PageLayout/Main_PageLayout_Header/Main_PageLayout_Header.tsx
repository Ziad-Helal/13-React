import { Link } from "react-router-dom";
import { NavMenu } from "../../../layouts";

export const Main_PageLayout_Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-primary text-background p-3 shadow-xl">
      <div className="container mx-auto flex gap-5 items-center justify-between">
        <Link to="/" className="uppercase text-[25px] sm:text-[32px] font-bold">
          Start Framework
        </Link>
        <NavMenu />
      </div>
    </header>
  );
};
