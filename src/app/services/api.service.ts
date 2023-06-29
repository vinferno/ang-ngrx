import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://jsonplaceholder.typicode.com/';
  constructor(
    private http: HttpClient

  ) { }
  get(url: string){
    return this.http.get(`${this.baseUrl}${url}`);
  }
}
