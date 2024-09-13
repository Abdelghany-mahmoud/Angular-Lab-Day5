import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { student, students } from './Types/students.types';
import { HeaderComponent } from './Components/header/header.component';
import { UsersComponent } from './Components/users/users.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UsersComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  
  Student:student|undefined

  getdata(data:any){
    this.Student=data;
  }

}
