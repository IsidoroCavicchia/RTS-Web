import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page114Component } from './page114.component';

describe('Page114Component', () => {
  let component: Page114Component;
  let fixture: ComponentFixture<Page114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
