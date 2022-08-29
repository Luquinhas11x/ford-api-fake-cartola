import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserExperienceRoutingModule } from './user-experience-routing.module';
import { MyTeamComponent } from './my-team/my-team.component';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';

import { InputsPipe } from 'src/app/core/pipes/inputs/inputs.pipe';
import { FirstUppercasePipe } from 'src/app/core/pipes/first-uppercase/first-uppercase.pipe';
import { ExibitionComponent } from './exibition/exibition.component';
import { PlayerListComponent } from 'src/app/components/player-list/player-list.component';
import  { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import {MessageModule} from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [MyTeamComponent, InputsPipe, FirstUppercasePipe, ExibitionComponent, PlayerListComponent],
  imports: [
    CommonModule,
    UserExperienceRoutingModule,
    FormsModule,
    ButtonModule,
    ConfirmDialogModule,
    TooltipModule,
    RippleModule,
    MessagesModule,
    DialogModule,
    MessageModule,
    ToastModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class UserExperienceModule { }
