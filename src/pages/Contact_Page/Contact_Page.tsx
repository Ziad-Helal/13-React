import { ContactForm, Main_PageHero } from "../../layouts";

export default function Contact_Page() {
  document.title = "Contact";

  return (
    <Main_PageHero title="Contact Component" normal>
      <ContactForm className="max-w-screen-sm mx-auto text-start" />
    </Main_PageHero>
  );
}
