import { Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import ServiceSelection from "./pages/serviceSelection/ServiceSelection";
import TimeSelection from "./pages/timeSelection/TimeSelection";
import SelectedSlotDetails from "./pages/selectedSlotDetails/selectedSlotDetails";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ServiceSelection />} />
        <Route path={"/timeSelection"} element={<TimeSelection />} />
        <Route path={"/selectedSlotDetails"} element={<SelectedSlotDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
