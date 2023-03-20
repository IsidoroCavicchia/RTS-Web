import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page147Component } from './page147.component';

describe('Page147Component', () => {
  let component: Page147Component;
  let fixture: ComponentFixture<Page147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
