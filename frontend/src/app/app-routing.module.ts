import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactUdateComponent } from './contact-udate/contact-udate.component';

const routes: Routes = [
  { path: 'contatos', component: ContactListComponent },
  { path: 'contatos/novo', component: ContactCreateComponent },
  { path: 'contatos/editar/:id', component: ContactUdateComponent }, 
  { path: '', redirectTo: 'contatos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
