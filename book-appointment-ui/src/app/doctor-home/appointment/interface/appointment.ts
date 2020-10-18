export interface Appointment {
  id: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

  export interface SortEvent {
    column: SortColumn;
    direction: SortDirection;
  }

  export type SortColumn = keyof Appointment | '';
export type SortDirection = 'asc' | 'desc' | '';