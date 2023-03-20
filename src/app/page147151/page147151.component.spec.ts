import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page147151Component } from './page147151.component';

describe('Page147151Component', () => {
  let component: Page147151Component;
  let fixture: ComponentFixture<Page147151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page147151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page147151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
