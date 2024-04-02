import styles from "./ServiceSelection.module.css";
import { useState } from "react";
import { servicesData } from "../../data/services";
import { CategoryServices } from "../../types/serviceSelection";
import { FaPlus, FaMinus } from "react-icons/fa";
import PrimeryButton from "../../components/buttons/primaryButton/PrimeryButton";

const ServiceSelection: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<{ [key: string]: boolean }>(
    {}
  );

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
                  <PrimeryButton text={"Select"} />
                </div>
              </li>
            ))}
        </ul>
      ))}
    </div>
  );
};

export default ServiceSelection;
