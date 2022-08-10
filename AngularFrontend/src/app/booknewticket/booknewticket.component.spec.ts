import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooknewticketComponent } from './booknewticket.component';

describe('BooknewticketComponent', () => {
  let component: BooknewticketComponent;
  let fixture: ComponentFixture<BooknewticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooknewticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooknewticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
