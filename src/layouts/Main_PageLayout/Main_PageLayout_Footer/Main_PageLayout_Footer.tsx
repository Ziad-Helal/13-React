import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export const Main_PageLayout_Footer = () => {
  return (
    <footer className="bg-primary text-background text-center">
      <section className="px-14 py-24 grid gap-16 grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-1">
        <div>
          <p className="uppercase text-[23px] lg:text-[28px] font-medium">
            Location
          </p>
          <p className="pt-2 pb-4">2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div>
          <p className="uppercase text-[23px] lg:text-[28px] font-medium">
            Around The WEB
          </p>
          <div>
            <FontAwesomeIcon
              icon={faFacebook}
              border
              className="rounded-full p-[10px] mx-1"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              border
              className="rounded-full p-[10px] mx-1"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              border
              className="rounded-full p-[10px] mx-1"
            />
            <FontAwesomeIcon
              icon={faGlobe}
              border
              className="rounded-full p-[10px] mx-1"
            />
          </div>
        </div>
        <div>
          <p className="uppercase text-[23px] lg:text-[28px] font-medium">
            About Freelancer
          </p>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </section>
      <section className="bg-[#1a252f] px-[10px] py-5">
        <p>Copyright © Your Website 2021</p>
      </section>
    </footer>
  );
};
