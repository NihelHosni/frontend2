import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  
    constructor(private http: HttpClient) { 
  
    }
    getAll() {
      return this.http.get('http://localhost:8080/allarticals')
      .map((res)=>res);
 
  }
  
}
