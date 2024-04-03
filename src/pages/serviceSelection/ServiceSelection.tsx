import styles from "./ServiceSelection.module.css";
import { useState } from "react";
import { servicesData } from "../../data/services";
import { CategoryServices } from "../../types/serviceSelection";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useReservation } from "../../context/reservationContext";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";

const ServiceSelection: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<{ [key: string]: boolean }>(
    {}
  );
  const { reservation, setReservation } = useReservation();

  const services: CategoryServices = servicesData.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as CategoryServices);

  const handleCategoriesMenu = (category: string) => {
    setShowDropdown({
      ...showDropdown,
      [category]: !showDropdown[category],
    });
  };

  const handleServiceSelection = (serviceId: number) => {
    const updatedSelectedServices = reservation?.service?.includes(serviceId)
      ? reservation?.service?.filter((id) => id !== serviceId)
      : [...(reservation?.service ?? []), serviceId];

    setReservation({
      ...reservation,
      service: updatedSelectedServices,
    });
  };

  return (
    <div className={styles.serviceSelectionContainer}>
      <h3>Categories</h3>
      {Object.entries(services).map(([category, servicesList]) => (
        <ul key={category}>
          <button
            className={styles.listButton}
            onClick={() => handleCategoriesMenu(category)}
          >
            <span> {category} </span>
            <span> {showDropdown[category] ? <FaMinus /> : <FaPlus />}</span>
          </button>
          {showDropdown[category] &&
            servicesList.map((service) => (
              <li key={service.id}>
                <p>{service.name}</p>
                <p>{service.description}</p>
                <div className={styles.primaryButtonContainer}>
                  <PrimaryButton
                    text={
                      reservation &&
                      reservation.service &&
                      reservation.service.includes(service.id)
                        ? "Selected"
                        : "Select"
                    }
                    isSelected={(reservation?.service ?? []).includes(
                      service.id
                    )}
                    onClick={() => handleServiceSelection(service.id)}
                  />
                </div>
              </li>
            ))}
        </ul>
      ))}
    </div>
  );
};

export default ServiceSelection;
