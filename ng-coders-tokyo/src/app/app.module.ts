import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { HiComponent } from './components/hi/hi.component';
import { DataService } from './services/data.service';

@NgModule({// @Decorator //metadata
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
