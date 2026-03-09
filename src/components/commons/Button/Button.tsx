import styles from "./Button.module.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  id?: string;
  text?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  type = "button",
  id = "",
  text = "",
  onClick,
}: ButtonProps) => {
  return (
    <button type={type} id={id} className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
