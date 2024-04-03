import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Reservation, ReservationContextType } from "../types/reservation";

export const ReservationContext = createContext<ReservationContextType>({
  reservation: { service: [], date: "", time: "" },
  setReservation: () => {},
  confirmedReservations: [],
  setConfirmedReservation: () => {},
});

export const ReservationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const reservationString = localStorage.getItem("reservation");
  const storedReservation = reservationString ? JSON.parse(reservationString) : { service: [], date: "", time: "" };
  const [reservation, setReservation] = useState<Reservation>(storedReservation);

  const [confirmedReservations, setConfirmedReservation] = useState<Reservation[]>(
    () => {
      return JSON.parse(localStorage.getItem("confirmedReservation") || "[]");
    }
  );

  useEffect(() => {
    localStorage.setItem("reservation", JSON.stringify(reservation));
    localStorage.setItem(
      "confirmedReservation",
      JSON.stringify(confirmedReservations)
    );
  }, [reservation, confirmedReservations]);

  return (
    <ReservationContext.Provider
      value={{
        reservation,
        setReservation,
        confirmedReservations,
        setConfirmedReservation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error(
      "useReservation must be used within a ReservationContextProvider"
    );
  }
  return context;
};
