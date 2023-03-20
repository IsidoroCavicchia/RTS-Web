import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page14715Component } from './page14715.component';

describe('Page14715Component', () => {
  let component: Page14715Component;
  let fixture: ComponentFixture<Page14715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page14715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page14715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
