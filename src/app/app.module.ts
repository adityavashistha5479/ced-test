import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { WealthCalenderComponent } from './wealth-calender/wealth-calender.component';
import { FooterComponent } from './footer/footer.component';
import { InvestmentsFamilyComponent } from './investments-family/investments-family.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainDashboardComponent,
    WealthCalenderComponent,
    FooterComponent,
    InvestmentsFamilyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
