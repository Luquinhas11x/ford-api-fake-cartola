import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RegistrationComponent } from 'src/app/modules/admin/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
  ]
})
export class AdminModule { }
