import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page131321Component } from './page131321.component';

describe('Page131321Component', () => {
  let component: Page131321Component;
  let fixture: ComponentFixture<Page131321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page131321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page131321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
