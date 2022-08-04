import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExibitionComponent } from './exibition/exibition.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MyTeamComponent } from './my-team/my-team.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { InputsPipe } from './inputs.pipe';
import { FirstUppercasePipe } from './first-uppercase.pipe';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';



@NgModule({
  declarations: [
    AppComponent,
    ExibitionComponent,
    HomeComponent,
    RegistrationComponent,
    MyTeamComponent,
    PlayerListComponent,
    InputsPipe,
    FirstUppercasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    TooltipModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
