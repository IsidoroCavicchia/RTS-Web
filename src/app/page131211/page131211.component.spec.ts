import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page131211Component } from './page131211.component';

describe('Page131211Component', () => {
  let component: Page131211Component;
  let fixture: ComponentFixture<Page131211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page131211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page131211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
