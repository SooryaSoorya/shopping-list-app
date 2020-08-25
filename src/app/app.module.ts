
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { APP_CONFIG, AppConfig } from './config/app.config';

import { ShoppingListService } from './services/product.service';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    MaterialModule
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig },
    ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
