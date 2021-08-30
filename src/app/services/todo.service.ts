import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {Todo} from '../todo/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl:string ="https://jsonplaceholder.typicode.com/todos"

  constructor(private httpClient:HttpClient) { }

  getTodos(): Observable<Todo[]>{

    return this.httpClient.get<Todo[]>(this.apiUrl)
  }
}
