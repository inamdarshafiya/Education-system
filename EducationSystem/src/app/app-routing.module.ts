import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'course',component:CourseComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
