import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastmonthComponent } from './lastmonth.component';

describe('LastmonthComponent', () => {
  let component: LastmonthComponent;
  let fixture: ComponentFixture<LastmonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastmonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastmonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
