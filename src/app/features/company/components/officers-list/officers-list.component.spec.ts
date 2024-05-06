import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficersListComponent } from './officers-list.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OfficersListComponent', () => {
  let component: OfficersListComponent;
  let fixture: ComponentFixture<OfficersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [OfficersListComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '10' } } },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
