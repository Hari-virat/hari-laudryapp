import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
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
import { authGuard } from './guards/auth.guard';
import { BillComponent } from './component/bill/bill.component';
import { CreateiteamComponent } from './component/createiteam/createiteam.component';
import { PackingComponent } from './component/packing/packing.component';
import { CustomerrecordComponent } from './component/customerrecord/customerrecord.component';
import { DeliveryrecordComponent } from './component/deliveryrecord/deliveryrecord.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'confirmorderlist',component:HomeComponent},
  {path:'neworder',component:NeworderComponent},
{path :'savepannel',component:SavepannelComponent},
{path:'washing',component:WashingComponent},
{path:'ironing',component:IroningComponent},
{path:'delivery',component:DeliveryComponent},
{path:'deliveryhistory',component:DeliveryhistoryComponent},
{path:'customerhistory',component:CustomerhistoryComponent},
{path:'home',component:SettingsComponent},
{path:'createexpence',component:CreateexpenceComponent},
{path:'bill',component:BillComponent},
{path:'createitem',component:CreateiteamComponent},
{path:'packing',component:PackingComponent},
{path:'customerrecord',component:CustomerrecordComponent},
{path:'deliveryrecord',component:DeliveryrecordComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
