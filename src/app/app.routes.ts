import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses';

export const routes: Routes = [
    { path: "Courses", component: CoursesComponent},
    { path: "", redirectTo: "Courses", pathMatch: "full"}
];
