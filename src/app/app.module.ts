import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { NeworderComponent } from './component/neworder/neworder.component';
import { SavepannelComponent } from './component/savepannel/savepannel.component';
import { WashingComponent } from './component/washing/washing.component';
import { IroningComponent } from './component/ironing/ironing.component';
import { DeliveryComponent } from './component/delivery/delivery.component';
import { DeliveryhistoryComponent } from './component/deliveryhistory/deliveryhistory.component';
import { CustomerhistoryComponent } from './component/customerhistory/customerhistory.component';

import { SettingsComponent } from './component/settings/settings.component';
import { CreateexpenceComponent } from './component/createexpence/createexpence.component';
import { DailyexpenceComponent } from './component/dailyexpence/dailyexpence.component';
import { MonthlyexpenceComponent } from './component/monthlyexpence/monthlyexpence.component';
import { BillComponent } from './component/bill/bill.component';
import { CreateiteamComponent } from './component/createiteam/createiteam.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    NeworderComponent,
    SavepannelComponent,
    WashingComponent,
    IroningComponent,
    DeliveryComponent,
    DeliveryhistoryComponent,
    CustomerhistoryComponent,
    SettingsComponent,
    CreateexpenceComponent,
    DailyexpenceComponent,
    MonthlyexpenceComponent,
    BillComponent,
    CreateiteamComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
