import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren,ViewChild ,AfterViewInit } from '@angular/core';
import { AppointmentService } from '../appontment/appointment.service';
import { Appointment} from './interface/appointment';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  countries:Appointment[];
  startDate: Date = new Date();
  options =[{key:"OPEN",value:"Open"},{key:"CLOSED",value:"Close"},{key:"CANCELLED",value:"Cancel"}];
  closeResult = '';
  modalStatus = 'OPEN';

  constructor(private appointmentService:AppointmentService,private modalService: NgbModal){}

  ngOnInit(){
    this.countries= this.appointmentService.getAppontment();
    this.startDate = new Date();
    this.countries.sort(function(a, b) {
      return a.id - b.id;
    });
  }
  dateFilter(value:any){
  }
   sortByDate( a, b ) {
    if ( a.created_at < b.created_at ){
      return -1;
    }
    if ( a.created_at > b.created_at ){
      return 1;
    }
    return 0;
  }

  changeStatus(content,id){
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

    closeModal(){
      console.log("**",this.modalStatus)
    }
  
}
