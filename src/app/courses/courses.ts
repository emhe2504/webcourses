import { Component, inject, signal, computed } from '@angular/core';
import { course } from '../models/courseInt';
import { CoursesService } from '../services/getcourses';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class CoursesComponent {

  courses = signal<course[]>([]);   //signal som lagrar courses, startvärde tom array
  error = signal<string | null>(null);    //signal som lagrar error, startvärde null

  searchPhrase = signal("");  //signal som lagrar sökfras

  //signal som lagrar uträknat (filtrerat) värde
  filterCourses = computed(() => {
    const searchFilter = this.searchPhrase().trim().toLowerCase();  //Sökfrasen vi matade in (inga mellanstag, gemener)
    if (!searchFilter) return this.courses(); //Ingen sökfras, visa alla kurser

    return this.courses().filter(course =>
      course.code.toLowerCase().includes(searchFilter) || //returnera kurskoder som inkluderar sökfras
      course.coursename.toLowerCase().includes(searchFilter) || //returnera kursnamn som inkluderar sökfras
      course.progression.toLowerCase().includes(searchFilter) //returnera progression som inkluderar sökfras
    )
  });

  getcourses = inject(CoursesService);

  //Körs när komponenten startar
  ngOnInit() {
    this.loadCourses();
  }

  async loadCourses() {
    try {
      const response = await this.getcourses.loadCourses();   //Den som returnerar courses som ett promise
      this.courses.set(response);   //set för att uppdatera värdet
      console.table(this.courses());

    } catch (error) {
      this.error.set("Data kunde inte laddas, prova igen om en stund.");
    }
  }
}
