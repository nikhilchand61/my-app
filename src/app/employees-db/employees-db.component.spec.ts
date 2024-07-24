import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDbComponent } from './employees-db.component';

describe('EmployeesDbComponent', () => {
  let component: EmployeesDbComponent;
  let fixture: ComponentFixture<EmployeesDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesDbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
