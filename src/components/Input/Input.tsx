import { FC, HTMLInputTypeAttribute, useRef, useState } from "react";

interface Input_Props {
  type?: HTMLInputTypeAttribute | "textarea";
  label?: string;
  placeHolder?: string;
  rows?: number;
  required?: boolean;
}

export const Input: FC<Input_Props> = ({
  type = "text",
  label,
  placeHolder,
  rows = 8,
  required = false,
}) => {
  const inputId = `${type}-${(label || placeHolder)?.split(" ").join("_")}`;
  const [isEmpty, setIsEmpty] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  function inputHandler() {
    const current =
      type == "textarea"
        ? textAreaRef.current?.value.length == 0
        : inputRef.current?.value.length == 0;
    isEmpty != current && setIsEmpty(current);
  }

  return (
    <div className="relative bg-background z-10 mt-12">
      <label
        htmlFor={inputId}
        className={`text-secondary absolute ${
          isEmpty ? "bottom-0" : "bottom-full"
        } left-0 -z-10 transition-all duration-500`}
      >
        {label}
      </label>
      {type == "textarea" ? (
        <textarea
          id={inputId}
          ref={textAreaRef}
          placeholder={placeHolder}
          className="border-b rounded-md hover:border-secondary focus:border-secondary block w-full px-3 outline-none placeholder:text-primary placeholder:opacity-80"
          onInput={inputHandler}
          rows={rows}
          required={required}
        />
      ) : (
        <input
          id={inputId}
          ref={inputRef}
          type={type}
          placeholder={placeHolder}
          className="border-b rounded-md hover:border-secondary focus:border-secondary block w-full px-3 outline-none placeholder:text-primary placeholder:opacity-80"
          onInput={inputHandler}
          required={required}
        />
      )}
    </div>
  );
};
