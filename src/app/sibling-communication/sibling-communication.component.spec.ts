import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingCommunicationComponent } from './sibling-communication.component';

describe('SiblingCommunicationComponent', () => {
  let component: SiblingCommunicationComponent;
  let fixture: ComponentFixture<SiblingCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingCommunicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
