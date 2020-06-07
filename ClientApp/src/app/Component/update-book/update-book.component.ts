import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
 public book : any;
 updateBookForm : FormGroup;
  constructor(private service: BookService, 
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.service.getBookById(this.route.snapshot.params.id).subscribe(data => {
      this.book = data;
      this.updateBookForm = this.fb.group({
        id:[data.id],
        title:[data.title, Validators.required],
        author:[data.author ,Validators.required],
        description:[data.description,Validators.compose([Validators.required,Validators.minLength(30)])],
        rate:[data.rate],
        dateStart:[this.formatDate(data.dateStart)],
        dateEnd:[this.formatDate(data.dateEnd)],
    })
  })

  }
  formatDate(date:Date){
    if(date){
      return new Date(date).toISOString().substring(0,10);
    }
  }
  onSubmit(){
    this.service.updateBook(this.updateBookForm.value).subscribe(data =>{
      this.router.navigate(['/books']);
    })
  }
}
