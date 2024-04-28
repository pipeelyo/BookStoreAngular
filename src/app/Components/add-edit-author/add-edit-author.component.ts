import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthorInterface } from '../../Interfaces/author-interface';
import { ProgressBarComponent } from '../../Shared/progress-bar/progress-bar.component';
import { AuthorService } from '../../Services/author.service';

@Component({
  selector: 'app-add-edit-author',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, ProgressBarComponent],
  templateUrl: './add-edit-author.component.html',
  styleUrl: './add-edit-author.component.css'
})
export class AddEditAuthorComponent {
  formAuthor: FormGroup;
  id: number;
  metodo: string = 'Agregar ';
  loading:boolean = false;
  
  constructor(private fb: FormBuilder, private _authorService: AuthorService, private router:Router,  private aRoute: ActivatedRoute){
    this.formAuthor = this.fb.group({
      AuthorName: ['', Validators.required],
      Biography: ['', Validators.required],
    });
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if(this.id !== 0){ 
      this.metodo = 'Editar ';
      this.getAuthor(this.id);
    }
  }

  addAuthor = () => {
    const author: AuthorInterface = {
      authorName: this.formAuthor.value.AuthorName,
      biography: this.formAuthor.value.Biography,
    }
    this._authorService.create(author).subscribe(() => {
      alert('Autor agregado');
      this.router.navigate(['/author']);
    });  
    
  }

  getAuthor = (id:number) => {
    this.loading = true;
    this._authorService.getById(id).subscribe((data:any) => {
      this.formAuthor.patchValue({
        AuthorName: data.authorName,
        Biography:  data.biography
      });
      this.loading = false;
    });
  } 

  editAuthor = () => {
    const author: AuthorInterface ={
      authorId: this.id,
      authorName: this.formAuthor.value.AuthorName,
      biography: this.formAuthor.value.Biography,
    }
    this._authorService.update(this.id,author).subscribe(() => {
      alert('autor Editado');
      this.router.navigate(['/author']);
    });  
  }

}
