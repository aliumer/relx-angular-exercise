import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './features/company/company.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './features/authentication/login/login.component';
import { PaginationModule } from './features/pagination/pagination.module';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CompanyModule,
    PaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
