import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FilmeComponent } from './filme/filme.component';
import { AppRoutingModule, ROUTES } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';
import { CreateComponent } from './filme/create/create.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EditarComponent } from './filme/editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    CreateComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
