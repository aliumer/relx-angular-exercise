import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Company } from '../models/company.model';
import { Officer, OfficerItem } from '../models/officer.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchCompanyService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({ 'x-api-key': environment.apiKey });

  searchCompany(searchTerm: string): Observable<Company> {
    return this.http
      .get<Company>('/company?Query=' + searchTerm, {
        headers: this.headers,
      })
      .pipe(catchError(this.handleError));
  }

  getOfficersById(companyId: string): Observable<Officer> {
    return this.http
      .get<Officer>('/officers?CompanyNumber=' + companyId, {
        headers: this.headers,
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<never> {
    console.log(errorResponse);
    return throwError(() => errorResponse );
  }
}
