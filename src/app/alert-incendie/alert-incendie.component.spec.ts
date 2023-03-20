import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertIncendieComponent } from './alert-incendie.component';

describe('AlertIncendieComponent', () => {
  let component: AlertIncendieComponent;
  let fixture: ComponentFixture<AlertIncendieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertIncendieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertIncendieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
