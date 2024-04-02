import { useLocation, useNavigate } from "react-router";
import { useReservation } from "../../context/reservationContext";
import { PropsSecondaryButton } from "../../types/buttons";
import SecondaryButton from "../buttons/secondaryButton/SecondaryButton";
import styles from "./ProgressNavigation.module.css";

const ProgressNavigation: React.FC = () => {
  const { reservation } = useReservation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNext = () => {
    if (pathname === "/") {
      navigate("/timeSelection");
    } else if (pathname === "/timeSelection") {
      navigate("/confirmAppointment");
    }
  };

  const handlePrevius = () => {
    if (pathname === "/timeSelection") {
      navigate("/");
    } else if (pathname === "/confirmAppointment") {
      navigate("/timeSelection");
    }
  };

  return (
    <div className={styles.progressNavigationContainer}>
      <div className={styles.subContainer}>
        {pathname !== "/" ? (
          <SecondaryButton text={"Previous"} onClick={handlePrevius} />
        ) : (
          <span></span>
        )}
        {reservation.service.length !== 0 && (
          <SecondaryButton text={"Next"} onClick={handleNext} />
        )}
      </div>
    </div>
  );
};

export default ProgressNavigation;
