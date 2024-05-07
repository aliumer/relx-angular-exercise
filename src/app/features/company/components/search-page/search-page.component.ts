import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/core/models/company.model';
import { SearchCompanyService } from 'src/app/core/services/search-company.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  $data!: Observable<Company>;
  errorMessage!: string;
  isSubmitted = false;

  searchForm = this.fb.group({
    search: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private searchCompanyService: SearchCompanyService,
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.errorMessage = '';
    this.isSubmitted = true;
    if (this.searchForm.invalid) return;
    this.$data = this.searchCompanyService.searchCompany(this.searchForm.value.search).pipe(
      catchError( err => {
        this.errorMessage = `Error occured while accessing ${err.url}, Status: ${err.status}, Status Text: ${err.statusText}`;
        return EMPTY;
      })
    );
  }
}
