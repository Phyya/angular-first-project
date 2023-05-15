import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { LoginComponent } from './pages/login/login.component';
import { SavestarComponent } from './pages/savestar/savestar.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'savestar',
    component: SavestarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
