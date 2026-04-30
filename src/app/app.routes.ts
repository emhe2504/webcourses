import { Routes } from '@angular/router';
import { Courses } from './courses/courses';

export const routes: Routes = [
    { path: "Courses", component: Courses},
    { path: "", redirectTo: "Courses", pathMatch: "full"}
];
