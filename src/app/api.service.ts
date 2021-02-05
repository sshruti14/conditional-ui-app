import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const localUrl = 'assets/data/conditions.json';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getConditionsData(){
    return this.http.get('/api/condition');
  }


}
