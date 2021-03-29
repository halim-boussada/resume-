import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCoursComponent } from './one-cours.component';

describe('OneCoursComponent', () => {
  let component: OneCoursComponent;
  let fixture: ComponentFixture<OneCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
