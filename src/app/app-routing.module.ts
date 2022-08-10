import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibitionComponent } from './modules/user-experience/exibition/exibition.component';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user-experience/user-experience.module').then(m => m.UserExperienceModule)
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
