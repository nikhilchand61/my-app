import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingDiscountComponent } from './sibling-discount.component';

describe('SiblingDiscountComponent', () => {
  let component: SiblingDiscountComponent;
  let fixture: ComponentFixture<SiblingDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingDiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
