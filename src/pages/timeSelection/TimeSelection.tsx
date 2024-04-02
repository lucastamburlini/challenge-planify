import styles from "./TimeSelection.module.css";
import { slotsData } from "../../data/slots";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import { useReservation } from "../../context/reservationContext";

const formatDate = (dateString: string | number | Date) => {
  return new Date(dateString).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
  });
};

const TimeSelection: React.FC = () => {
  const { reservation, setReservation } = useReservation();
  const { date, availableTimeslots } = slotsData;
  const formattedDate = formatDate(date);

  const handleDate = (slot: string) => {
    if (slot === reservation.date) {
      setReservation({
        ...reservation,
        date: "",
      });
    } else {
      setReservation({
        ...reservation,
        date: slot,
      });
    }
  };
  return (
    <div className={styles.timeSelectionContainer}>
      <h3>Next available slots</h3>
      <h3>{formattedDate}</h3>
      <div className={styles.slotsContainer}>
        {availableTimeslots.map((slot) => (
          <PrimaryButton
            key={slot}
            text={slot}
            onClick={() => handleDate(slot)}
            isSelected={slot === reservation.date}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeSelection;
