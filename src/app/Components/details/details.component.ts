import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  providers: [UsersService],
})
export class DetailsComponent implements OnInit{
  user:any;
  ID=0;
  constructor(myRoute:ActivatedRoute , private UServ:UsersService){
    this.ID =  myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.UServ.GetUser(this.ID).subscribe({
      next:(data)=>{
        this.user= data;
      }
    })
  }
}
