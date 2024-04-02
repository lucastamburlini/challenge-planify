import { Route, Routes } from "react-router";
import "./index.module.css";
import NavBar from "./components/navbar/NavBar";
import ServiceSelection from "./pages/serviceSelection/ServiceSelection";
import TimeSelection from "./pages/timeSelection/TimeSelection";
import SelectedSlotDetails from "./pages/selectedSlotDetails/selectedSlotDetails";
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />} />
        <Route path={"/"} element={<ServiceSelection />} />
        <Route path={"/timeSelection"} element={<TimeSelection />} />
        <Route
          path={"/selectedSlotDetails"}
          element={<SelectedSlotDetails />}
        />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
