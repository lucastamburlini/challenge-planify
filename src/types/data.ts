export interface Services {
  id: number;
  name: string;
  description: string;
  category: string;
}

export interface Slots {
  date: string;
  serviceId: number;
  availableTimeslots: string[];
}
