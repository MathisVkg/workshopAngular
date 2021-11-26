import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CardItemComponent } from './card-item/card-item.component';
import { FormItemComponent } from './form-item/form-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CardItemComponent,
    FormItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
