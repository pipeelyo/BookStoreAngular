import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorInterface } from '../Interfaces/author-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private url: string = 'http://localhost:5072/api';
  private readonly http = inject(HttpClient);
  private session:string =  localStorage.getItem('login')!

 
  
  getAll() {
    const headers = this.getAuthorizationToken()
    let response;
    try {
      response = this.http.get(this.url+'/Authors', { headers });
    } catch (error) {
      console.error('error en AuthorService =', error);
    }
    return response!;
  }

  getById(id:number): Observable<AuthorInterface> {
    const headers = this.getAuthorizationToken()
    let response;
    try {
      response = this.http.get<AuthorInterface>(this.url+'/Authors/'+id, {headers});
    } catch (error) {
      console.error('error en AuthorService =', error);
    }
    return response!;
  }

  create (author: AuthorInterface): Observable<void> {
    const headers = this.getAuthorizationToken()
    let response;
    try {
      response = this.http.post<void>(this.url+'/Authors', author, {headers});
    } catch (error) {
      console.error('error en AuthorService =', error);
    }
    return response!;
  }

  update (id: number, author: AuthorInterface): Observable<void>{
    const headers = this.getAuthorizationToken();
    let response;
    try {
      response = this.http.put<void>(this.url+'/Authors/'+id, author, {headers});
    } catch (error) {
      console.error('error en AuthorService =', error);
    }
    return response!;
  }

  remove(id:number): Observable<void> {
    const headers = this.getAuthorizationToken()
    let response;
    try {
      response = this.http.delete<void>(this.url+'/Authors/'+id, {headers});
    } catch (error) {
      console.error('error en AuthorService =', error);
    }
    return response!;
  }

  getAuthorizationToken(){
    const token = JSON.parse(this.session);
    const headers = new HttpHeaders( {
      Authorization: `Bearer ${token.token}`
    }) 
    return headers;
  }
}
