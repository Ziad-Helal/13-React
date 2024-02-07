import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, NavigationLink } from "../../components";
import { useState } from "react";

const navigationLinks = ["about", "portfolio", "contact"];

export const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openNavbar() {
    setIsOpen(true);
  }

  function closeNavbar() {
    setIsOpen(false);
  }

  return (
    <nav>
      <Button
        variant="raw"
        title="Open Navigation Bar"
        className="relative top-[2px] sm:hidden"
        onClick={openNavbar}
      >
        <span className="sr-only">Open Navigation Bar</span>
        <FontAwesomeIcon icon={faBars} size="xl" fixedWidth />
      </Button>
      <div
        className={`font-bold uppercase fixed sm:static top-0 right-0 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:translate-x-0 h-screen sm:h-auto bg-primary text-end transition-all duration-500 max-sm:shadow-2xl`}
      >
        <Button
          variant="raw"
          title="Close Navigation Bar"
          className="p-1 m-2 sm:hidden"
          onClick={closeNavbar}
        >
          <span className="sr-only">Close Navigation Bar</span>
          <FontAwesomeIcon icon={faXmark} size="xl" />
        </Button>
        <h2 className="sr-only">Main Navigation</h2>
        <ul className="text-start sm:flex gap-4">
          {navigationLinks.map((link, index) => (
            <li key={`navLink${index}`}>
              <NavigationLink
                to={link}
                className="max-sm:rounded-none max-sm:w-40"
                onClick={closeNavbar}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
