import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagCoursesComponent } from './manag-courses.component';

describe('ManagCoursesComponent', () => {
  let component: ManagCoursesComponent;
  let fixture: ComponentFixture<ManagCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
