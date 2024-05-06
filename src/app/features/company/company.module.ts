import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { OfficersListComponent } from './components/officers-list/officers-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  declarations: [
    SearchPageComponent,
    SearchResultsComponent,
    CompanyDetailsComponent,
    OfficersListComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, PaginationModule],
})
export class CompanyModule {}
