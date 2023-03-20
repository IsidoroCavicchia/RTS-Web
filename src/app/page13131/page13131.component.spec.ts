import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page13131Component } from './page13131.component';

describe('Page13131Component', () => {
  let component: Page13131Component;
  let fixture: ComponentFixture<Page13131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page13131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page13131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
