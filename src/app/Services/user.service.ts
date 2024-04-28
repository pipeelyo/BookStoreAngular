import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserInterface } from '../Interfaces/user-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:5072/api';
  private readonly http = inject(HttpClient);
  private session:string =  localStorage.getItem('login')!
  
  getAll() {
    let response;
    try {
      response = this.http.get(this.url+'/Users');
    } catch (error) {
      console.error('error en AuthorService =', error);
    }
    return response!;
  }

  getById(id:number): Observable<UserInterface> {
    let response;
    try {
      response = this.http.get<UserInterface>(this.url+'/Users/'+id);
    } catch (error) {
      console.error('error en AuthorService =', error);
    }
    return response!;
  }

  create (user: UserInterface): Observable<void> {
    let response;
    try {
      response = this.http.post<void>(this.url+'/Users', user);
    } catch (error) {
      console.error('error en AuthorService =', error);
    }
    return response!;
  }

  update (id: number, user: UserInterface): Observable<void>{
    let response;
    try {
      response = this.http.put<void>(this.url+'/Users/'+id, user);
    } catch (error) {
      console.error('error en AuthorService =', error);
    }
    return response!;
  }

  remove(id:number): Observable<void> {
    let response;
    try {
      response = this.http.delete<void>(this.url+'/Users/'+id);
    } catch (error) {
      console.error('error en AuthorService =', error);
    }
    return response!;
  }

  login(data:any): Observable<any> {
    let response;
    try {
      response = this.http.post(this.url+'/Authenticacion/Authenticate', data);
    } catch (error) {
      console.error('error en AuthorService =', error);
    }
    return response!;
  }

}
