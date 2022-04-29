import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private http:HttpClient) { }

  getAllUser(): Observable<User[]>{
    console.log("Called getAllUser")
    return this.http.get<User[]>(URL+'/users')
  }
}
