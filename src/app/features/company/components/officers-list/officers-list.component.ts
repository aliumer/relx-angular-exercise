import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Company } from 'src/app/core/models/company.model';
import { Officer } from 'src/app/core/models/officer.model';
import { SearchCompanyService } from 'src/app/core/services/search-company.service';

@Component({
  selector: 'app-officers-list',
  templateUrl: './officers-list.component.html',
  styleUrls: ['./officers-list.component.css'],
})
export class OfficersListComponent implements OnInit {
  $company!: Observable<Company>;
  $officers!: Observable<Officer>;
  errorMessage!: string;

  constructor(
    private route: ActivatedRoute,
    private searchCompanyService: SearchCompanyService
  ) {}

  ngOnInit(): void {
    this.errorMessage = '';
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.$company = this.searchCompanyService.searchCompany(id).pipe(
      catchError((err) => {
        this.errorMessage = `Error occured while accessing ${err.url}, Status: ${err.status}, Status Text: ${err.statusText}`;
        return EMPTY;
      })
    );
    this.$officers = this.searchCompanyService.getOfficersById(id).pipe(
      catchError((err) => {
        this.errorMessage += `Error occured while accessing ${err.url}, Status: ${err.status}, Status Text: ${err.statusText}`;
        return EMPTY;
      })
    );
  }
}
