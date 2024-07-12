import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishGradeAppComponent } from './wish-grade-app.component';

describe('WishGradeAppComponent', () => {
  let component: WishGradeAppComponent;
  let fixture: ComponentFixture<WishGradeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishGradeAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishGradeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
