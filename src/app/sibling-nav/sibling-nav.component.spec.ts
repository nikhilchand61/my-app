import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingNavComponent } from './sibling-nav.component';

describe('SiblingNavComponent', () => {
  let component: SiblingNavComponent;
  let fixture: ComponentFixture<SiblingNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
