import { Main_PageHero } from "../../layouts";

export const NotFound_Page = () => {
  document.title = "404";

  return (
    <Main_PageHero title="Page Not Found">
      <p>Check The URL</p>
    </Main_PageHero>
  );
};
