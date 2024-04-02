import styles from "./PrimaryButton.module.css";
import { PropsButtons } from "../../../types/buttons";

const PrimeryButton: React.FC<PropsButtons> = ({ text }) => {
  return <button className={styles.primaryButtonContainer}>{text}</button>;
};

export default PrimeryButton;
