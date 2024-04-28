import { Component } from '@angular/core';
import { BookInterface } from '../../Interfaces/book-interface';
import { RouterLink } from '@angular/router';
import { BookService } from '../../Services/book.service';
import { ProgressBarComponent } from '../../Shared/progress-bar/progress-bar.component';

@Component({
  selector: 'app-list-books',
  standalone: true,
  imports: [RouterLink, ProgressBarComponent],
  
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent {
  ListBook: BookInterface[] = [];
  loading: boolean = false;

  constructor(private _bookService: BookService){

  }

  ngOnInit(): void {
    this.getBooks();
  }

  async getBooks(){
    this.loading = true;
    await this._bookService.getAll().subscribe((data: any) => {
      this.ListBook = data;
      this.loading = false;
    });
  }

  deleteProduct(id:number){
    this.loading = true;
    this._bookService.remove(id).subscribe((data: any) => {
      this.getBooks();
      alert('Libro eliminado')
    });
  }

}
