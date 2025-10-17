import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // <--- IMPORTADO
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketRegistrationComponent } from './ticket-registration/ticket-registration.component';
import { TicketBoardComponent } from './ticket-board/ticket-board.component';
import { KpiCardComponent } from './kpi-card/kpi-card.component';
import { PageListComponent } from './Pages/page-list/page-list.component';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TicketPageComponent } from './ticket-page/ticket-page.component';

@NgModule({
  declarations: [
    SideNavComponent,
    TopNavComponent,
    TicketListComponent,
    TicketRegistrationComponent,
    TicketBoardComponent,
    KpiCardComponent,
    PageListComponent,
    PageLoginComponent,
    TicketPageComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    SideNavComponent,
    TopNavComponent,
    TicketListComponent,
    TicketRegistrationComponent,
    TicketBoardComponent,
    KpiCardComponent,
    PageListComponent,
    PageLoginComponent,
    TicketPageComponent
  ],
})
export class ComponentsModule {}
