import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page147231Component } from './page147231.component';

describe('Page147231Component', () => {
  let component: Page147231Component;
  let fixture: ComponentFixture<Page147231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page147231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page147231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
