import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsComponent } from './company-details.component';
import { ActivatedRoute } from '@angular/router';
import { SearchCompanyService } from 'src/app/core/services/search-company.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CompanyDetailsComponent', () => {
  let component: CompanyDetailsComponent;
  let fixture: ComponentFixture<CompanyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyDetailsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '10' } } },
        },
        SearchCompanyService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
