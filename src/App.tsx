import { Route, Routes, useLocation } from "react-router";
import "./index.module.css";
import NavBar from "./components/navbar/NavBar";
import ServiceSelection from "./pages/serviceSelection/ServiceSelection";
import TimeSelection from "./pages/timeSelection/TimeSelection";
import SelectedSlotDetails from "./pages/selectedSlotDetails/selectedSlotDetails";
import Layout from "./pages/layout/Layout";
import ProgressBar from "./components/progressBar/ProgressBar";
import ProgressNavigation from "./components/progressNavigation/ProgressNavigation";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [steps, setSteps] = useState<number>(1);

  useEffect(() => {
    switch (location.pathname) {
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
  }, [location.pathname]);

  return (
    <div>
    {location.pathname !== "/selectedSlotDetails" && <ProgressBar steps={steps} />}
    
    <Routes>
      <Route path={"/"} element={<Layout />} />
      <Route path={"/"} element={<ServiceSelection />} />
      <Route path={"/timeSelection"} element={<TimeSelection />} />
      <Route path={"/confirmAppointment"} element={<TimeSelection />} />
      <Route path={"/selectedSlotDetails"} element={<SelectedSlotDetails />} />
    </Routes>
    
    <NavBar />
  </div>
  );
}

export default App;
