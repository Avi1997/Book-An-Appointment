import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren,ViewChild ,AfterViewInit } from '@angular/core';
import { AppointmentService } from '../appontment/appointment.service';
import { NgbdSortableHeader } from './appointment.directive';
import { SortEvent} from './interface/appointment';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource :any ;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private appointmentService:AppointmentService){}
  ngOnInit(){
    this.dataSource= new MatTableDataSource(this.appointmentService.getAppontment());
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
