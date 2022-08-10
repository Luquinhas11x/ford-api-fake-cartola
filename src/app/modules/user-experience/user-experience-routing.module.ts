import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibitionComponent } from 'src/app/modules/user-experience/exibition/exibition.component';
import { MyTeamComponent } from './my-team/my-team.component';

const routes: Routes = [
  {
    path: 'my-team',
    component: MyTeamComponent
  },
  {
    path: 'market',
    component: ExibitionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserExperienceRoutingModule { }
