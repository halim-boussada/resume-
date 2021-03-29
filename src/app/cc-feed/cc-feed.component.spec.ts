import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcFeedComponent } from './cc-feed.component';

describe('CcFeedComponent', () => {
  let component: CcFeedComponent;
  let fixture: ComponentFixture<CcFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
