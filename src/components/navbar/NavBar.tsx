import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link
            to={"/"}
            className={location.pathname === "/" ? styles.activeLink : ""}
          >
            Reservar
          </Link>
        </li>
        <li>
          <Link
            to={"/selectedSlotDetails"}
            className={location.pathname === "/selectedSlotDetails" ? styles.activeLink : ""}
          >
            Mis turnos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
