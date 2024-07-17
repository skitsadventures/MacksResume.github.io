// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home/home.component';
import { AboutComponent } from './components/About/about/about.component';
import { ResumeComponent } from './components/Resume/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ButtonModule,
    // Add other PrimeNG modules as needed
  ],
  providers: [
    // Add services if needed
  ],
  bootstrap: [AppComponent] // Only AppComponent should be in the bootstrap array
})
export class AppModule { }
