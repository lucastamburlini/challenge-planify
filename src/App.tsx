import { Route, Routes, useLocation } from "react-router";
import "./index.module.css";
import NavBar from "./components/navbar/NavBar";
import ServiceSelection from "./pages/serviceSelection/ServiceSelection";
import TimeSelection from "./pages/timeSelection/TimeSelection";
import SelectedSlotDetails from "./pages/selectedSlotDetails/selectedSlotDetails";
import Layout from "./pages/layout/Layout";
import ProgressBar from "./components/progressBar/ProgressBar";
import { useEffect, useState } from "react";
import ConfirmAppointment from "./pages/confirmAppointment/ConfirmAppointment";
import ProgressNavigation from "./components/progressNavigation/ProgressNavigation";
import { useReservation } from "./context/reservationContext";

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
      case "/confirmAppointment":
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
        <Route path={"/confirmAppointment"} element={<ConfirmAppointment />} />
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
