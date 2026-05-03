import { Component, inject, signal } from '@angular/core';
import { course } from '../models/courseInt';
import { CoursesService } from '../services/getcourses';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class CoursesComponent {

  courses = signal<course[]>([]);   //signal för hantera courses, startvärde tom []
  error = signal<string | null>(null);    //signal för att hantera error, startvärde null

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
