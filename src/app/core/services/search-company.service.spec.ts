import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SearchCompanyService } from './search-company.service';
import { Company } from '../models/company.model';
import { Officer } from '../models/officer.model';

describe('SearchCompanyService', () => {
  let service: SearchCompanyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchCompanyService],
    });
    service = TestBed.inject(SearchCompanyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve company data', () => {
    const searchTerm = 'example';
    const dummyCompany: Company = {
      page_number: 1,
      kind: '',
      total_results: 1,
      items: [],
    };

    service.searchCompany(searchTerm).subscribe((company) => {
      expect(company).toEqual(dummyCompany);
    });

    const req = httpMock.expectOne(`/company?Query=${searchTerm}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCompany);
  });

  it('should retrieve officer data', () => {
    const companyId = 'example_id';
    const dummyOfficer: Officer = {
      etag: '',
      kind: '',
      items_per_page: 1,
      links: {},
      items: [],
    };

    service.getOfficersById(companyId).subscribe((officer) => {
      expect(officer).toEqual(dummyOfficer);
    });

    const req = httpMock.expectOne(`/officers?CompanyNumber=${companyId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyOfficer);
  });
});
