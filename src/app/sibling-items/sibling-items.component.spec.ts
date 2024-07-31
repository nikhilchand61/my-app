import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingItemsComponent } from './sibling-items.component';

describe('SiblingItemsComponent', () => {
  let component: SiblingItemsComponent;
  let fixture: ComponentFixture<SiblingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
