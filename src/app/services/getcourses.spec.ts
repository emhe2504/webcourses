import { TestBed } from '@angular/core/testing';

import { CoursesService } from './getcourses';

describe('Courses', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
