import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Location1Component } from './location1.component';

describe('Location1Component', () => {
  let component: Location1Component;
  let fixture: ComponentFixture<Location1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Location1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Location1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
