import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbussearchComponent } from './adminbussearch.component';

describe('AdminbussearchComponent', () => {
  let component: AdminbussearchComponent;
  let fixture: ComponentFixture<AdminbussearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbussearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbussearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
