import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{path:'',component:HomepageComponent},
{path:'doc-home',component:DoctorHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
