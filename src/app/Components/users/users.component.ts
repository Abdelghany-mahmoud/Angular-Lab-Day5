import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../Services/users.service';
import { RouterModule } from '@angular/router';
import { UserComponent } from "../user/user.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    UserComponent
  ],
  templateUrl: './users.component.html',
  styles: ``,
  providers: [UsersService,],
})

export class UsersComponent implements OnInit {

  users: any;

  constructor(private UserServ: UsersService) { }
  ngOnInit(): void {
    this.UserServ.GetAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      }
    })
  }

}
