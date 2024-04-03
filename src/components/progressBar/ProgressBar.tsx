import styles from './ProgressBar.module.css'
import { useLocation } from "react-router";
import { Steps } from "../../types/app";
import { useEffect, useState } from "react";

const ProgressBar: React.FC<Steps> = ({ steps }) => {
  const location = useLocation();
  const [stepText, setStepText] = useState<string>("");
  const totalSteps = 4

  useEffect(() => {
    if (location.pathname === "/") {
      setStepText("Select service");
    } else if (location.pathname === "/timeSelection") {
      setStepText("Select time");
    } else if (location.pathname === "/confirmReservation") {
      setStepText("Confirm reservation");
    } else {
      setStepText("");
    }
  }, [location.pathname]);

  return (
    <div className={styles.progressBarContainer}>
      <h2>{stepText}</h2>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${(steps / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
