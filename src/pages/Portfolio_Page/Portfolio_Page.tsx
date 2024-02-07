import { Main_PageHero } from "../../layouts";
import { Project_Card } from "../../components";
import { project1, project2, project3 } from "../../assets/images";

const projects = [project1, project2, project3, project1, project2, project3];

export default function Portfolio_Page() {
  document.title = "Portfolio";

  return (
    <Main_PageHero title="Portfolio Component" normal>
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((image, index) => (
          <Project_Card key={`project${index}`} image={image} />
        ))}
      </div>
    </Main_PageHero>
  );
}
