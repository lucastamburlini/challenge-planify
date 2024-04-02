import styles from "./PrimaryButton.module.css";
import { PropsPrimaryButton } from "../../../types/buttons";

const PrimaryButton: React.FC<PropsPrimaryButton> = ({
  text,
  isSelected,
  onClick,
}) => {
  return (
    <button
      className={`${styles.container} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
