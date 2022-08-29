import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';




@NgModule({
  declarations: [
    AppComponent,
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
    RippleModule,
    
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
