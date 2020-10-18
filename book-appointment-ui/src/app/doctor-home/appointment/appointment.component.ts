import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren,ViewChild ,AfterViewInit } from '@angular/core';
import { AppointmentService } from '../appontment/appointment.service';
import { Appointment} from './interface/appointment';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthenticateService } from 'src/app/site/authenticate.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointment:Appointment[];
  startDate: Date = new Date();
  options =[{key:"OPEN",value:"Open"},{key:"CLOSED",value:"Close"},{key:"CANCELLED",value:"Cancel"}];
  closeResult = '';
  modalStatus = 'OPEN';
  noOppointment = false;
  app_id ;

  constructor(private appointmentService:AppointmentService,private modalService: NgbModal,private authService:AuthenticateService){}

  ngOnInit(){
    this.appointmentService.getAppontment().subscribe((res:Appointment[])=>{
      
      this.appointment = res;
    },(error =>{
      this.noOppointment = true;
    }));
    this.startDate = new Date();
    if(this.appointment){
    this.appointment.sort( (a,b) => this.sortByDate( a.app_date, b.app_date ));
    }else{
      this.noOppointment = false;
    }
  }
  dateFilter(value:any){
    this.appointmentService.getByDateAppontment(value).subscribe((res:Appointment[])=>{
      this.appointment = res;
    },(error =>{
      this.noOppointment = true;
    }));
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
    this.app_id =id;
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
     this.appointmentService.changeAppointmentStatus(this.authService.getdocId(),this.modalStatus,this.app_id ).subscribe(res =>{
       this.ngOnInit();
     });
    }
  
}
