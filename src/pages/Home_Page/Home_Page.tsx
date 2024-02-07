import { avatar } from "../../assets/images";
import { Main_PageHero } from "../../layouts";

export default function Home_Page() {
  document.title = "Home";

  return (
    <Main_PageHero title="Start Framework" imgSrc={avatar} home>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </Main_PageHero>
  );
}
