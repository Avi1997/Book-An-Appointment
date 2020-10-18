import { Time } from '@angular/common';

export interface User {
    user_id: string;
    name: string;
    email: string;
    password: string;
}

export interface Doctor extends User {
    appointment_slot_time: string;
    day_start: string;
    day_end : string;
    doctor_id?:string;
}