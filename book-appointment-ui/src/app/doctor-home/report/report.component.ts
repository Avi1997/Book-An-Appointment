import { Component, OnInit  } from '@angular/core';
import { Appointment } from '../appointment/interface/appointment';
import { ReportService } from './report.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  countries:any[];
  startDate: Date = new Date();

  constructor(private reportService:ReportService){}

  ngOnInit(){
    this.countries= this.reportService.getAllReport();
    this.startDate = new Date();
    this.countries.sort(function(a, b) {
      return a.id - b.id;
    });
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
  viewMore(id){
    console.log()
  }

}

