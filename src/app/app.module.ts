import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { CarouselIocoComponent } from './components/carousel-ioco/carousel-ioco.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [AppComponent, NavHeaderComponent, CarouselIocoComponent],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    ButtonModule,
    ToastModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
