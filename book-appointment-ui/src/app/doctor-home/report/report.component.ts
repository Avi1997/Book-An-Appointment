import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment/interface/appointment';
import { ReportService } from './report.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reports: any[];
  startDate: Date = new Date();
  showArr: any[] = [];
  noReport = false;

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.getAllReport().subscribe((res: any[]) => {
      this.reports = res; /*data is sorted according to the date*/
     
      if (this.reports.length > 0) {
        let acount = 0, ccount = 0;
        let i;
        for (i = 0; i < this.reports.length - 1; i++) {
          if (this.reports[i].app_date == this.reports[i + 1].app_date) {
            if (this.reports[i].app_status == 'OPEN') {
              acount++;
            }
            if (this.reports[i].app_status == 'CLOSED') {
              ccount++;
            }
          } else {
            const dummy = {
              aCount: acount + 1,
              cCount: ccount + 1,
              date: this.reports[i].app_date
            }
            this.showArr.push(dummy);
            acount = 0;
            ccount = 0;
          }
        }

        if (this.reports[i].app_date == this.reports[i - 1].app_date) {
          if (this.reports[i].app_status == 'OPEN') {
            this.showArr[this.showArr.length-1].aCount++;
          }
          if (this.reports[i].app_status == 'CLOSED') {
            this.showArr[this.showArr.length-1].cCount++;
          }
          
        } else {
          const dummy = {
            aCount:   1,
            cCount:  1,
            date: this.reports[i].app_date
          }
          this.showArr.push(dummy);
          acount = 0;
          ccount = 0;
        }
        

        console.log(this.showArr)
      }
    });
  

  }

  viewMore(id) {
    console.log(); /*can be completed after 10/20/2020*/
  }

}

