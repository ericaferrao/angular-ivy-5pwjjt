import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpClientModule],
  declarations: [ AppComponent, HelloComponent, ModalComponent, FooterComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
