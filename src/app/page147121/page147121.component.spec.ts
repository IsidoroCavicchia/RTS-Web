import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page147121Component } from './page147121.component';

describe('Page147121Component', () => {
  let component: Page147121Component;
  let fixture: ComponentFixture<Page147121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page147121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page147121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
