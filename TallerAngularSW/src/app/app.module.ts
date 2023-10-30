// Angular core imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Application-specific imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesModule } from './series/series.module';

// Module declaration
@NgModule({
  // Components, Directives, and Pipes related to this module
  declarations: [
    AppComponent
  ],
  // Other modules to import into this module
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeriesModule,
    HttpClientModule
  ],
  // Dependency injection providers
  providers: [],
  // Root component for bootstrapping the application
  bootstrap: [AppComponent]
})
export class AppModule { }
