import { FC, FormEvent } from "react";
import { Button, Input } from "../../components";

interface ContactForm_Props {
  className?: string;
}

export const ContactForm: FC<ContactForm_Props> = ({ className }) => {
  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className={`${className}`} onSubmit={submitHandler}>
      <fieldset>
        <legend className="sr-only">Contact</legend>
        <Input label="Your Name" placeHolder="Your Name" />
        <Input label="Your Email" placeHolder="Your Email" type="email" />
        <Input
          label="Message"
          placeHolder="Your Message"
          type="textarea"
          required
        />
      </fieldset>
      <Button type="submit" className="mt-6">
        Send Message
      </Button>
    </form>
  );
};
