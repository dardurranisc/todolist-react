import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant?: "default" | "buttonFilter";
  type?: "button" | "submit" | "reset";
  id?: string;
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  variant = "default",
  type = "button",
  id = "",
  text = "",
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      id={id}
      className={clsx(
        variant === "buttonFilter" ? styles.buttonFilter : styles.button,
        className,
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
