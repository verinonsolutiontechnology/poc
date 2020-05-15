import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { Sub3Component } from './sub3/sub3.component';
import { NAV1Component } from './nav1/nav1.component';
import { NAV2Component } from './nav2/nav2.component';
import { NAV3Component } from './nav3/nav3.component';
import { NAV4Component } from './nav4/nav4.component';
import { NAV5Component } from './nav5/nav5.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Sub1Component,
    Sub2Component,
    Sub3Component,
    NAV1Component,
    NAV2Component,
    NAV3Component,
    NAV4Component,
    NAV5Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
