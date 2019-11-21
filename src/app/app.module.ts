import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { FaqComponent } from './faq/faq.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
   declarations: [
      AppComponent,
      ScrollerComponent,
      FaqComponent,
      ContactusComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
