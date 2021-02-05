import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Conditions} from '../conditions'
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

constructor(private httpService: HttpClient) {}
conditions: any = [];
private conditionsUrl = 'api/heroes';  // URL to web api

  title = 'conditional-ui-app';



ngOnInit(){
this.httpService.get('assets/data/conditions.json').subscribe(data => {
//console.log(data);
this.conditions= data ;
//console.log(`SS ${this.conditions[0]}`);
})

}

getHeroes(): Observable<Conditions[]> {
  return this.httpService.get<Conditions[]>(this.conditionsUrl)
  .pipe(
    tap(_ => console.log('fetched conditions')),
    //catchError(console.log(('Error/';4', []))
  );
}

// conditionData(){
//   this.apiService.getConditionsData().subscribe(
//     data => {
//       console.log(data);
//       this.conditions = data},
//      err => console.error(err),
//     () => console.log('done loading conditions')
//   )
// }

}
