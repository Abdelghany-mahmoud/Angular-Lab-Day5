import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService{

  private readonly DB_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private readonly http: HttpClient) { }

  GetAllUsers(){
    return this.http.get(this.DB_URL);
  }

  GetUser(id:any) {
    return this.http.get(this.DB_URL+'/'+id);
  }
}
