import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieDashComponent } from './movie-dash/movie-dash.component';
import { MovieTableComponent } from './movie-table/movie-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDashComponent,
    MovieTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
