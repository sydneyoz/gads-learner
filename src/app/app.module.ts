import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { VoterComponent } from './voter.component';
import { VoteTakerComponent } from './votetaker.component';

const directives: any[] = [
    AppComponent,
 
    VoterComponent,
    VoteTakerComponent
  ];

//const schemas: any[] = [];


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: directives,
  bootstrap: [ AppComponent ],
  
})
export class AppModule { }
