import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { SuccessBannerComponent } from './success-banner/success-banner.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SupportComponent } from './support/support.component'; // Import BrowserAnimationsModule

import { FormsModule } from '@angular/forms'; // Import the FormsModule

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    HeroComponent,
    SimulatorComponent,
    SuccessBannerComponent,
    HowItWorksComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
