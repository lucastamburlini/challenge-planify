import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Reservation, ReservationContextType } from "../types/reservation";

export const ReservationContext = createContext<
  ReservationContextType | undefined
>(undefined);

export const ReservationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [reservation, setReservation] = useState<Reservation>(() => {
    return JSON.parse(localStorage.getItem("reservation") || "null");
  });

  console.log(reservation);
  

  useEffect(() => {
    localStorage.setItem("reservation", JSON.stringify(reservation));
  }, [reservation]);


  return (
    <ReservationContext.Provider value={{ reservation, setReservation }}>
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
