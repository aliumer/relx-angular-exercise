import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Company, CompanyItem } from 'src/app/core/models/company.model';
import { SearchCompanyService } from 'src/app/core/services/search-company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
})
export class CompanyDetailsComponent implements OnInit {
  $data!: Observable<Company>;
  errorMessage!: string;

  constructor(
    private route: ActivatedRoute,
    private searchCompanyService: SearchCompanyService
  ) {}

  ngOnInit(): void {
    this.errorMessage = '';
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.$data = this.searchCompanyService.searchCompany(id).pipe(
      catchError((err) => {
        this.errorMessage = `Error occured while accessing ${err.url}, Status: ${err.status}, Status Text: ${err.statusText}`;
        return EMPTY;
      })
    );
  }
}
