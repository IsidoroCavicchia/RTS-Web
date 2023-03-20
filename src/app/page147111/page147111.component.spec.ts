import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page147111Component } from './page147111.component';

describe('Page147111Component', () => {
  let component: Page147111Component;
  let fixture: ComponentFixture<Page147111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page147111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page147111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
