import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Location3Component } from './location3.component';

describe('Location3Component', () => {
  let component: Location3Component;
  let fixture: ComponentFixture<Location3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Location3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Location3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
