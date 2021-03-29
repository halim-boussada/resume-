import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbkComponent } from './rbk.component';

describe('RbkComponent', () => {
  let component: RbkComponent;
  let fixture: ComponentFixture<RbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
