import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudTaskProgressComponent } from './stud-task-progress.component';

describe('StudTaskProgressComponent', () => {
  let component: StudTaskProgressComponent;
  let fixture: ComponentFixture<StudTaskProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudTaskProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudTaskProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
