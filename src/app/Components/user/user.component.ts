import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './user.component.html',
  providers: [UsersService],
})
export class UserComponent{
  ID=0;
  @Input() userdata:any;
  constructor(myRoute:ActivatedRoute){
    this.ID =  myRoute.snapshot.params['id'];
  }
}
