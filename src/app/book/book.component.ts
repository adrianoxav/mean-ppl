import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookComponent implements OnInit {

  books: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      console.log(data);
      this.books = data;
    });
  }

}
