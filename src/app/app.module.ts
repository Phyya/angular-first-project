import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsComponent } from './pages/clients/clients.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { SavestarComponent } from './pages/savestar/savestar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BalanceComponent } from './components/balance/balance.component';
import { ScheduleSavingsComponent } from './components/schedule-savings/schedule-savings.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BarComponent } from './components/bar/bar.component';
import { TableComponent } from './components/table/table.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { Spend2saveComponent } from './pages/productpage/forms/spend2save/spend2save.component';
import { FixSaveComponent } from './pages/productpage/forms/fix-save/fix-save.component';
import { PercentwiseComponent } from './pages/productpage/forms/percentwise/percentwise.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    LoginComponent,
    SavestarComponent,
    DashboardComponent,
    BalanceComponent,
    ScheduleSavingsComponent,
    HeaderComponent,
    LayoutComponent,
    BarComponent,
    TableComponent,
    ModalComponent,
    ProductpageComponent,
    NavbarComponent,
    CustomInputComponent,
    DropdownComponent,
    Spend2saveComponent,
    FixSaveComponent,
    PercentwiseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
