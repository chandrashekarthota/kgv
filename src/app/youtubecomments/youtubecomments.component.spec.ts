import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubecommentsComponent } from './youtubecomments.component';

describe('YoutubecommentsComponent', () => {
  let component: YoutubecommentsComponent;
  let fixture: ComponentFixture<YoutubecommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubecommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubecommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
