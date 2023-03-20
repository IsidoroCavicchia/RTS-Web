import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page181Component } from './page181.component';

describe('Page181Component', () => {
  let component: Page181Component;
  let fixture: ComponentFixture<Page181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
