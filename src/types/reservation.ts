export interface Reservation {
  service: number[];
  date: string;
  time: string;
}

export interface ReservationContextType {
  reservation: Reservation;
  setReservation: React.Dispatch<React.SetStateAction<Reservation>>;
  confirmedReservations: Reservation[];
  setConfirmedReservation: React.Dispatch<React.SetStateAction<Reservation[]>>;
}