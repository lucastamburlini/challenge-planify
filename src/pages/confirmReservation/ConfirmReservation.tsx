import { useReservation } from "../../context/reservationContext";
import styles from "./ConfirmReservation.module.css";
import { servicesData } from "../../data/services";

const ConfirmReservation: React.FC = () => {
  const { reservation } = useReservation();

  if (!reservation) {
    return <div>Loading...</div>;
  }

  const getServiceName = (serviceId: number) => {
    const service = servicesData.find((service) => service.id === serviceId);
    return service ? service.name : "Unknown";
  };

  return (
    <div className={styles.confirmReservationContainer}>
      <p>
        Service:{" "}
        {reservation.service
          .map((serviceId) => getServiceName(serviceId))
          .join(", ")}
      </p>
      <p>
        Date: {reservation.date} {reservation.time}
      </p>
    </div>
  );
};

export default ConfirmReservation;
