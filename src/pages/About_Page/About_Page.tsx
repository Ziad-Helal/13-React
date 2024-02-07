import { Main_PageHero } from "../../layouts";

export default function About_Page() {
  document.title = "About";

  return (
    <Main_PageHero title="About Component">
      <div className="text-start grid gap-6 grid-cols-1 md:grid-cols-2">
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </Main_PageHero>
  );
}
