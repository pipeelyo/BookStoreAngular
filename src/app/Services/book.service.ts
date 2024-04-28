import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BookInterface } from '../Interfaces/book-interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url: string = 'http://localhost:5072/api';
  private readonly http = inject(HttpClient);
  private session:string =  localStorage.getItem('login')!
  
  getAll() {
    const headers = this.getAuthorizationToken();
    let response;
    try {
      response = this.http.get(this.url+'/Books',{headers})
    } catch (error) {
      console.error('error en bookService =', error);
      
    }
    return response!;
  }

  getById(id:number): Observable<BookService> {
    const headers = this.getAuthorizationToken();
    let response;
    try {
      response = this.http.get<BookService>(this.url+'/Books/'+id, {headers});
    } catch (error) {
      console.error('error en bookService =', error);
      
    }
    return response!;
  }

  create (book: BookInterface): Observable<void> {
    const headers = this.getAuthorizationToken();
    let response;
    try {
      response = this.http.post<void>(this.url+'/Books', book, {headers});
    } catch (error) {
      console.error('error en bookService =', error);
    }
    return response!;
  }

  update (id: number, book: BookInterface): Observable<void>{
    const headers = this.getAuthorizationToken();
    let response;
    try {
      response = this.http.put<void>(this.url+'/Books/'+id, book, {headers});
    } catch (error) {
      console.error('error en bookService =', error);
      
    }
    return response!;
  }

  remove(id:number): Observable<void> {
    const headers = this.getAuthorizationToken();
    let response;
    try {
      response = this.http.delete<void>(this.url+'/Books/'+id, {headers});
    } catch (error) {
      console.error('error en bookService =', error);
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
