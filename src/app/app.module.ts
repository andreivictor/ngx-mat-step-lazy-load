import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';

import { NgxMatStepLazyLoadModule } from 'ngx-mat-step-lazy-load';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LazyComponent } from './lazy-component/lazy-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatStepperModule,
    NgxMatStepLazyLoadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
