import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkHeart } from "react-icons/bs";

const NavBar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link
            to={"/"}
            className={`${pathname === "/" || pathname === "/timeSelection" ||  pathname === "/confirmAppointment" ? styles.activeLink : ""} `}
          >
            <BsBookmarkPlus />
            Book
          </Link>
        </li>
        <li>
          <Link
            to={"/selectedSlotDetails"}
            className={`${
              pathname === "/selectedSlotDetails" ? styles.activeLink : ""
            }`}
          >
            <BsBookmarkHeart />
            My turns
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
