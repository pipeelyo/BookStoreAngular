import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookInterface } from '../../Interfaces/book-interface';
import { BookService } from '../../Services/book.service';
import { ProgressBarComponent } from '../../Shared/progress-bar/progress-bar.component';

@Component({
  selector: 'app-add-eddit-product',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, ProgressBarComponent],
  templateUrl: './add-eddit-product.component.html',
  styleUrl: './add-eddit-product.component.css'
})
export class AddEdditProductComponent {
  formBook: FormGroup;
  id: number;
  metodo: string = 'Agregar ';
  loading:boolean = false;

  constructor(private fb: FormBuilder, private _bookService: BookService, private router: Router, private aRoute: ActivatedRoute){
    this.formBook = this.fb.group({
      Title: ['', Validators.required],
      Description: ['', Validators.required],
      AuthorId: [null, Validators.required],
      Publisher:['', Validators.required],
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));    
  }

  ngOnInit(): void {
    if(this.id !== 0){ 
      this.metodo = 'Editar ';
      this.getBook(this.id);
    }
  }

  addProduct = () => {
    // console.log('creadno producto', this.formBook.value);
    const book: BookInterface ={
      title: this.formBook.value.Title,
      description: this.formBook.value.Description,
      authorId: this.formBook.value.AuthorId,
      publisher: this.formBook.value.Publisher,
      publicationDate: new Date(),
    }
    this._bookService.create(book).subscribe(() => {
      alert('libro agregado');
      this.router.navigate(['/book']);
    });  
  }

  getBook = (id:number) => {
    this.loading = true;
    this._bookService.getById(id).subscribe((data:any) => {
      this.formBook.patchValue({
        Title: data.title,
        Description: data.description,
        AuthorId: data.authorId,
        Publisher: data.publisher
      });
      this.loading = false;
    });
  } 

  editBook = () => {
    const book: BookInterface ={
      bookId: this.id,
      title: this.formBook.value.Title,
      description: this.formBook.value.Description,
      authorId: this.formBook.value.AuthorId,
      publisher: this.formBook.value.Publisher,
      publicationDate: new Date(),
    }
    this._bookService.update(this.id,book).subscribe(() => {
      alert('libro Editado');
      this.router.navigate(['/book']);
    });  
  }

}
