import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Company } from 'src/app/core/models/company.model';
import { SearchCompanyService } from 'src/app/core/services/search-company.service';
import { EMPTY, Observable, catchError } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  searchTerms!: string;
  $data!: Observable<Company>;
  errorMessage!: string;

  constructor(
    private searchCompanyService: SearchCompanyService,
    @Inject(DOCUMENT) document: Document
  ) {}

  ngOnInit(): void {
    document.getElementById('searchbox')?.focus();
  }

  search() {
    this.errorMessage = '';
    this.$data = this.searchCompanyService.searchCompany(this.searchTerms).pipe(
      catchError( err => {
        this.errorMessage = `Error occured while accessing ${err.url}, Status: ${err.status}, Status Text: ${err.statusText}`;
        return EMPTY;
      })
    );
  }
}
