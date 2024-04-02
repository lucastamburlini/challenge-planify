export interface Reservation {
  service: string[];
  date: string;
  time: string;
}

export interface ReservationContextType {
  reservation: Reservation;
  updateReservation: (newReservation: Reservation) => void;
}
