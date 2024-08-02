import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingCartComponent } from './sibling-cart.component';

describe('SiblingCartComponent', () => {
  let component: SiblingCartComponent;
  let fixture: ComponentFixture<SiblingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
