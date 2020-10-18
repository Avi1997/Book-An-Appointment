import { Injectable } from '@angular/core';
import { Report } from './Interface/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  COUNTRIES: Report[] =  [
  ];
  constructor() { }

  getAllReport(){
    //this.getAllReport();
    return this.COUNTRIES;
  }
}
