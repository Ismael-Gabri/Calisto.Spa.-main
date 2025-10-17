import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { PageListComponent } from './components/Pages/page-list/page-list.component';
import { TicketRegistrationComponent } from './components/ticket-registration/ticket-registration.component';
import { PageLoginComponent } from './components/Pages/page-login/page-login.component';
import { TicketPageComponent } from './components/ticket-page/ticket-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' }, // rota inicial
  { path: 'list', component: PageListComponent },
  { path: 'ticket', component: TicketRegistrationComponent },
  { path: 'login', component:  PageLoginComponent},
  { path: 'test', component:  TicketPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
