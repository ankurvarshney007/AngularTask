import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './Components/components.module';
import { AssignmentModule } from './Assignment2Component/ass.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    AssignmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
