import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibitionComponent } from './exibition/exibition.component';
import { HomeComponent } from './home/home.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { RegistrationComponent } from './registration/registration.component';






const routes: Routes = [
  {
    path: 'exibition',
    component: ExibitionComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'my-team',
    component: MyTeamComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
