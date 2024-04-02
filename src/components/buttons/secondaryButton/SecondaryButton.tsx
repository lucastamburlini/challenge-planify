import styles from "./SecondaryButton.module.css";
import { PropsSecondaryButton } from "../../../types/buttons";

const SecondaryButton: React.FC<PropsSecondaryButton> = ({ text, onClick }) => {
  return (
    <button className={styles.container} onClick={onClick}>
      {text}
    </button>
  );
};

export default SecondaryButton;
