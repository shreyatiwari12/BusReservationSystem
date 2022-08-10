import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleterouteComponent } from './deleteroute.component';

describe('DeleterouteComponent', () => {
  let component: DeleterouteComponent;
  let fixture: ComponentFixture<DeleterouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleterouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleterouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
