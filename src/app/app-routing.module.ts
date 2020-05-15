import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { Sub3Component } from './sub3/sub3.component';
import { componentFactoryName } from '@angular/compiler';
import { NAV1Component } from './nav1/nav1.component';
import { NAV2Component } from './nav2/nav2.component';
import { NAV3Component } from './nav3/nav3.component';
import { NAV4Component } from './nav4/nav4.component';
import { NAV5Component } from './nav5/nav5.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'NAV1', component:NAV1Component},
  {path:'NAV2', component:NAV2Component},
  {path:'NAV3', component:NAV3Component},
  {path:'NAV4', component:NAV4Component},
  {path:'NAV5', component:NAV5Component},
  {path:'sub1', component:Sub1Component},
  {path:'sub2', component:Sub2Component},
  {path:'sub3', component:Sub3Component},
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
