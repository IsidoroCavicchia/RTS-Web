import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page13121Component } from './page13121.component';

describe('Page13121Component', () => {
  let component: Page13121Component;
  let fixture: ComponentFixture<Page13121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page13121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page13121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
