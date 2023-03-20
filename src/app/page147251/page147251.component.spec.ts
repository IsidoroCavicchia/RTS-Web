import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page147251Component } from './page147251.component';

describe('Page147251Component', () => {
  let component: Page147251Component;
  let fixture: ComponentFixture<Page147251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page147251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page147251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
