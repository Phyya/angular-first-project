import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { SavestarComponent } from './pages/savestar/savestar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: DashboardComponent },
      { path: 'my-savings', component: SavestarComponent },
      { path: 'home/:identifier', component: ProductpageComponent },
      { path: 'loans/:identifier', component: ProductpageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
