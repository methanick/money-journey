import { SummaryComponent } from './components/summary/summary.component';
import { OrderComponent } from './components/order/order.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {StyleClassModule} from 'primeng/styleclass'

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {CheckboxModule} from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import {InputTextModule} from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    SplitButtonModule,
    MessagesModule,
    MessageModule,
    RouterModule.forRoot([]),
    StyleClassModule,
    CheckboxModule,
    ChipModule,
    InputTextModule,
    HomeComponent,
    OrderComponent,
    SummaryComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
