import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursCreatorComponent } from './add-cours-creator.component';

describe('AddCoursCreatorComponent', () => {
  let component: AddCoursCreatorComponent;
  let fixture: ComponentFixture<AddCoursCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoursCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoursCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
