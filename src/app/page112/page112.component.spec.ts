import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page112Component } from './page112.component';

describe('Page112Component', () => {
  let component: Page112Component;
  let fixture: ComponentFixture<Page112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
