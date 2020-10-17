import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './doctor-home/appointment/appointment.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { ReportComponent } from './doctor-home/report/report.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{path:'',component:HomepageComponent},
{path:'doc-home',component:DoctorHomeComponent},
{path:'show-report',component:ReportComponent},
{path:'view-appointment', component:AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
