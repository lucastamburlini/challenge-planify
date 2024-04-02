import { ReactNode, createContext, useContext, useState } from "react";
import { Reservation, ReservationContextType } from "../types/reservation";

export const ReservationContext = createContext<
  ReservationContextType | undefined
>(undefined);

export const ReservationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [reservation, setReservation] = useState<Reservation>({
    service: [],
    date: "",
    time: "",
  });

  console.log("data", reservation);

  const updateReservation = (newReservation: Reservation) => {
    setReservation((prevReservation) => ({
      ...prevReservation,
      ...newReservation,
    }));
  };

  return (
    <ReservationContext.Provider value={{ reservation, updateReservation }}>
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
