import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page14713Component } from './page14713.component';

describe('Page14713Component', () => {
  let component: Page14713Component;
  let fixture: ComponentFixture<Page14713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page14713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page14713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
