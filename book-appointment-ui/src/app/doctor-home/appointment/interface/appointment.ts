export interface Appointment {
  id?:number,
  app_date:string;
  app_time:string;
  doc_id:number;
  patient_name:string;
  patient_email:string;
  patient_phone;
  app_status:string;
}

  export interface SortEvent {
    column: SortColumn;
    direction: SortDirection;
  }

  export type SortColumn = keyof Appointment | '';
export type SortDirection = 'asc' | 'desc' | '';