import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { SampleComponent } from './sample/sample.component';


const routes: Routes = [
   {
      path: "dashboard",
      component: DashboardComponent,
   },
   {
      path: "",
      component: RegisterComponent,
   },
   {
      path: "sample",
      component: SampleComponent,
   },

];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
