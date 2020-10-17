export interface Appointment {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

  export interface SortEvent {
    column: SortColumn;
    direction: SortDirection;
  }

  export type SortColumn = keyof Appointment | '';
export type SortDirection = 'asc' | 'desc' | '';