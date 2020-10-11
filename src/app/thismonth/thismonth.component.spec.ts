import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThismonthComponent } from './thismonth.component';

describe('ThismonthComponent', () => {
  let component: ThismonthComponent;
  let fixture: ComponentFixture<ThismonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThismonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThismonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
