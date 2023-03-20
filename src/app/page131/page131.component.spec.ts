import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page131Component } from './page131.component';

describe('Page131Component', () => {
  let component: Page131Component;
  let fixture: ComponentFixture<Page131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
