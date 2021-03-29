import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstractorFeedComponent } from './instractor-feed.component';

describe('InstractorFeedComponent', () => {
  let component: InstractorFeedComponent;
  let fixture: ComponentFixture<InstractorFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstractorFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstractorFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
