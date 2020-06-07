import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

   public book: Book;

  constructor(private service : BookService, 
              private route : ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.service.getBookById(this.route.snapshot.params.id).subscribe(data =>{
      this.book = data;
    })
  }
  updateBook(id: number){
    this.router.navigate(["/update-book/" + id]);
  }
}
