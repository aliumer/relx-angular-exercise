import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CompanyItem } from 'src/app/core/models/company.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnChanges {
  @Input() companyItems!: CompanyItem[];

  companies!: CompanyItem[];
  currentPage: number = 1;
  limit: number = 5;
  total!: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.companyItems && this.companyItems.length > 0) {
      this.total = this.companyItems.length;
      this.changePage(1);
    }
  }

  changePage(page: number) {
    this.currentPage = page;
    this.companies =
      this.companyItems && this.companyItems.length > 0
        ? this.companyItems.slice(
            (this.currentPage - 1) * this.limit,
            this.currentPage * this.limit
          )
        : [];
  }
}
