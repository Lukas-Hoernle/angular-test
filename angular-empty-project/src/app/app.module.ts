import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TemplateformComponent, ReactiveformComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
