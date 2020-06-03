import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  _baseURL :string = "api/Books"

  constructor(private http:HttpClient) { }

  getAllBooks(){
    return this.http.get<Book[]>(this._baseURL+"/GetBooks");
  }
  addBook(Book:Book): Observable<any>{
   return this.http.post(this._baseURL+"/AddBook", Book);
  }
}
