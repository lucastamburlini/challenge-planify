import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ReservationContextProvider } from "./context/reservationContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReservationContextProvider>
        <App />
      </ReservationContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
