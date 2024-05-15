import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/core/models/company.model';
import { SearchCompanyService } from 'src/app/core/services/search-company.service';
import { EMPTY, Observable, catchError, debounceTime } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  isSubmitted = false;

  searchForm = this.fb.group({
    search: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  onSubmit() {
    this.isSubmitted = true;
    if (this.searchForm.invalid) return;
    this.router.navigate(['/company', this.searchForm.value.search]);
  }
}
