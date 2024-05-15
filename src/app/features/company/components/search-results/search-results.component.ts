import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { Company, CompanyItem } from 'src/app/core/models/company.model';
import { SearchCompanyService } from 'src/app/core/services/search-company.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  
  errorMessage!: string;
  $data!: Observable<Company>;
  companyItems!: CompanyItem[];
  companySlices!: CompanyItem[];
  currentPage: number = 1;
  limit: number = 5;
  total!: number;

  constructor(private route: ActivatedRoute, 
              private searchService: SearchCompanyService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.$data = this.searchService.searchCompany(id).pipe(
      map(data => {
        this.companyItems = data.items;
        this.total = data.items.length;
        this.changePage(1);
        return data;
      }),
      catchError((err) => {
        this.errorMessage = `Error occured while accessing ${err.url}, Status: ${err.status}, Status Text: ${err.statusText}`;
        return EMPTY;
      })
    )
  }

  changePage(page: number) {
    this.currentPage = page;
    this.companySlices =
      this.companyItems && this.companyItems.length > 0
        ? this.companyItems.slice(
            (this.currentPage - 1) * this.limit,
            this.currentPage * this.limit
          )
        : [];
  }
}
