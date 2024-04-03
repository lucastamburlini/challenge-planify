import { Route, Routes, useLocation } from "react-router";
import "./index.css";
import NavBar from "./components/navbar/NavBar";
import ServiceSelection from "./pages/serviceSelection/ServiceSelection";
import TimeSelection from "./pages/timeSelection/TimeSelection";
import SelectedSlotDetails from "./pages/selectedSlotDetails/selectedSlotDetails";
import Layout from "./pages/layout/Layout";
import ProgressBar from "./components/progressBar/ProgressBar";
import { useEffect, useState } from "react";
import ProgressNavigation from "./components/progressNavigation/ProgressNavigation";
import { useReservation } from "./context/reservationContext";
import ConfirmReservation from "./pages/confirmReservation/ConfirmReservation";

function App() {
  const { reservation } = useReservation();
  const { pathname } = useLocation();
  const [steps, setSteps] = useState<number>(1);

  useEffect(() => {
    switch (pathname) {
      case "/":
        setSteps(1);
        break;
      case "/timeSelection":
        setSteps(2);
        break;
      case "/confirmReservation":
        setSteps(3);
        break;
      default:
        setSteps(1);
        break;
    }
  }, [pathname]);

  return (
    <div>
      {pathname !== "/selectedSlotDetails" && <ProgressBar steps={steps} />}

      <Routes>
        <Route path={"/"} element={<Layout />} />
        <Route path={"/"} element={<ServiceSelection />} />
        <Route path={"/timeSelection"} element={<TimeSelection />} />
        <Route path={"/confirmReservation"} element={<ConfirmReservation />} />
        <Route
          path={"/selectedSlotDetails"}
          element={<SelectedSlotDetails />}
        />
      </Routes>
      {reservation.service.length !== 0 &&
        pathname !== "/selectedSlotDetails" && <ProgressNavigation />}
      <NavBar />
    </div>
  );
}

export default App;
