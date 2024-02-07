import { FC, ReactNode } from "react";

interface Button_Props {
  children: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  variant?: "primary" | "secondary" | "raw";
  title?: string;
  onClick?: VoidFunction;
}

export const Button: FC<Button_Props> = ({
  children,
  className,
  type = "button",
  variant = "primary",
  title,
  onClick,
}) => {
  const variantClassName =
    variant == "primary"
      ? "text-background bg-secondary border-secondary active:border-background"
      : variant == "secondary" && "text-primary bg-background border-primary";

  return (
    <button
      type={type}
      title={title}
      className={`${
        variant == "raw"
          ? ""
          : `py-2 px-3 rounded-md border ${variantClassName}`
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
