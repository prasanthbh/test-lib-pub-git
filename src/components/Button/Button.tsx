import "./btn-style.css";
import styles from "./Button.module.css";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={styles["btn"]} style={{ fontWeight: "bold" }}>
      {props.label}
    </button>
  );
};

export default Button;
