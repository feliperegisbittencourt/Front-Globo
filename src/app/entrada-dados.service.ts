import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { tap, map, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntradaDadosService {
  sidenav: boolean = false;

  constructor(private http: HttpClient) { }


  listUser(): Observable<User[]>{
    const url = '/assets/database.json';
    return this.http.get<User[]>(url).pipe(
      //tap(x => console.log('antes do map >>', x)),
      map((x: any) => x.body.data.users as User[]),
    );
  }

  setSidenav(){
    this.sidenav != this.sidenav;
  }

  getSidenav(){
    return this.sidenav;
  }


}

export interface User{
  user: string;
  email: string;
  inclusion_date: string;
  change_date: string;
  rules: string;
  status: string;
}
