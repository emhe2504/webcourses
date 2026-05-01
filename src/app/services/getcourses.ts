import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { course } from '../models/courseInt';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private url: string = "https://webbutveckling.miun.se/files/ramschema.json";

  //injicerar HttpClient
  http = inject(HttpClient);

  //Ladda kurser

  async loadCourses(): Promise<course[]> {
    const courses = this.http.get<course[]>(this.url);  //använder httpClient, get-anrop, läsa in som array med course, anropa URL

    return await firstValueFrom(courses);   //Returnera courses som ett promise till anropet
  }
}
