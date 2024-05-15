import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './features/company/components/search-page/search-page.component';
import { CompanyDetailsComponent } from './features/company/components/company-details/company-details.component';
import { OfficersListComponent } from './features/company/components/officers-list/officers-list.component';
import { LoginComponent } from './features/authentication/login/login.component';
import { AuthGuard } from './features/authentication/auth.guard';
import { SearchResultsComponent } from './features/company/components/search-results/search-results.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  {
    path: 'details/:id',
    component: CompanyDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'company/:id', component: SearchResultsComponent },
  { path: 'officers/:id', component: OfficersListComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
