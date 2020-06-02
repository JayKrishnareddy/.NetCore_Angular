import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './Component/nav-menu/nav-menu.component';
import { HomeComponent } from './Component/home/home.component';
import { BooksComponent } from './Component/books/books.component';
import { DeleteBookComponent } from './Component/delete-book/delete-book.component';
import { NewBookComponent } from './Component/new-book/new-book.component';
import { ShowBookComponent } from './Component/show-book/show-book.component';
import { UpdateBookComponent } from './Component/update-book/update-book.component';
import { BookService } from './Services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BooksComponent,
    DeleteBookComponent,
    NewBookComponent,
    ShowBookComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path:'books', component: BooksComponent},
      { path:'new-book', component: NewBookComponent},
      { path:'update-book/:id', component: UpdateBookComponent},
      { path:'delete-book/:id', component: DeleteBookComponent},
      { path:'show-book/:id', component: ShowBookComponent},
      
    ])
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
