import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page14722Component } from './page14722.component';

describe('Page14722Component', () => {
  let component: Page14722Component;
  let fixture: ComponentFixture<Page14722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page14722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page14722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
