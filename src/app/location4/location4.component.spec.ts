import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Location4Component } from './location4.component';

describe('Location4Component', () => {
  let component: Location4Component;
  let fixture: ComponentFixture<Location4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Location4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Location4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
