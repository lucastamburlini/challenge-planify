import styles from "./selectedSlotDetails.module.css";
import { useReservation } from "../../context/reservationContext";
import { servicesData } from "../../data/services";
import { Reservation } from "../../types/reservation";
import { FaCheck } from "react-icons/fa";

const SelectedSlotDetails: React.FC = () => {
  const { confirmedReservations } = useReservation();

  const getServiceNames = (serviceIds: number[]) => {
    return serviceIds
      .map((serviceId) => {
        const service = servicesData.find(
          (service) => service.id === serviceId
        );
        return service ? service.name : "Unknown";
      })
      .join(", ");
  };

  const sortedReservations = confirmedReservations.sort((a, b) => {
    const dateTimeA = a.date + a.time;
    const dateTimeB = b.date + b.time;
    return dateTimeB.localeCompare(dateTimeA);
  });

  return (
    <div className={styles.confirmReservationContainer}>
      <h3>Confirmed reservations</h3>
      {sortedReservations.map((reservation: Reservation, index: number) => (
        <div className={styles.subContainer} key={index}>
          <div>
            <p>Service: {getServiceNames(reservation.service)}</p>
            <p>
              Date: {reservation.date} {reservation.time}
            </p>
          </div>
          <div>
            <FaCheck />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedSlotDetails;
