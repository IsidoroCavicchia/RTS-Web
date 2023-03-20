import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page147211Component } from './page147211.component';

describe('Page147211Component', () => {
  let component: Page147211Component;
  let fixture: ComponentFixture<Page147211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page147211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page147211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
