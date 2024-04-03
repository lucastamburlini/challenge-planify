import { useLocation, useNavigate } from "react-router";
import { useReservation } from "../../context/reservationContext";
import SecondaryButton from "../buttons/secondaryButton/SecondaryButton";
import styles from "./ProgressNavigation.module.css";
import Swal from "sweetalert2";
import { Reservation } from "../../types/reservation";

const ProgressNavigation: React.FC = () => {
  const { reservation, setReservation, setConfirmedReservation } =
    useReservation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNext = () => {
    if (pathname === "/") {
      navigate("/timeSelection");
    } else if (pathname === "/timeSelection") {
      navigate("/confirmReservation");
    }
  };

  const handlePrevius = () => {
    if (pathname === "/timeSelection") {
      navigate("/");
    } else if (pathname === "/confirmReservation") {
      navigate("/timeSelection");
    }
  };

  const handleConfirmReservation = () => {
    Swal.fire({
      title: "Do you want to confirm the reservation?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      focusCancel: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setConfirmedReservation((prevConfirmedReservations: Reservation[]) => {
          const confirmedReservations = Array.isArray(prevConfirmedReservations)
            ? prevConfirmedReservations
            : [];
          return [...confirmedReservations, reservation];
        });
        setReservation({
          service: [],
          date: "",
          time: "",
        });
        Swal.fire({
          title: "Confirmed!",
          text: "Your reservation has been confirmed.",
          icon: "success",
        });
        navigate("/selectedSlotDetails");
      }
    });
  };

  return (
    <div className={styles.progressNavigationContainer}>
      <div className={styles.subContainer}>
        {pathname !== "/" ? (
          <SecondaryButton text={"Previous"} onClick={handlePrevius} />
        ) : (
          <span></span>
        )}
        {pathname === "/confirmReservation" ? (
          <SecondaryButton
            text={"Confirm"}
            onClick={handleConfirmReservation}
          />
        ) : (reservation?.service?.length !== 0 && pathname === "/") ||
          (reservation.time !== "" && pathname === "/timeSelection") ? (
          <SecondaryButton text={"Next"} onClick={handleNext} />
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default ProgressNavigation;
