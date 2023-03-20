import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page142Component } from './page142.component';

describe('Page142Component', () => {
  let component: Page142Component;
  let fixture: ComponentFixture<Page142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
