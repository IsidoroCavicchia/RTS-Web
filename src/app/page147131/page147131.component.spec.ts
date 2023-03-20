import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page147131Component } from './page147131.component';

describe('Page147131Component', () => {
  let component: Page147131Component;
  let fixture: ComponentFixture<Page147131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page147131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page147131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
