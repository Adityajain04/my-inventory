import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  path_url = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  get_data(path): Observable<Object>{
    return this.http.get(this.path_url+path)
  }
}
