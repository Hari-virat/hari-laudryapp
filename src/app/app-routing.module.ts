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
import { DailyexpensesComponent } from './component/dailyexpenses/dailyexpenses.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'neworder',component:NeworderComponent},
{path :'savepannel',component:SavepannelComponent},
{path:'washing',component:WashingComponent},
{path:'ironing',component:IroningComponent},
{path:'delivery',component:DeliveryComponent},
{path:'deliveryhistory',component:DeliveryhistoryComponent},
{path:'customerhistory',component:CustomerhistoryComponent},
{path:'dailyexpenses',component:DailyexpensesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
