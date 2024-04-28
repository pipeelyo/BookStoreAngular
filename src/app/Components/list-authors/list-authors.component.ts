import { Component } from '@angular/core';
import { AuthorInterface } from '../../Interfaces/author-interface';
import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from '../../Shared/progress-bar/progress-bar.component';
import { AuthorService } from '../../Services/author.service';

@Component({
  selector: 'app-list-authors',
  standalone: true,
  imports: [RouterLink, ProgressBarComponent],
  templateUrl: './list-authors.component.html',
  styleUrl: './list-authors.component.css'
})
export class ListAuthorsComponent {

  ListAuthors: AuthorInterface[] = [];
  loading: boolean = false;

  constructor(private _authorService: AuthorService){

  }

  ngOnInit(): void {
    this.getAuthors();
  }

  async getAuthors(){
    this.loading = true;
    await this._authorService.getAll().subscribe((data: any) => {
      this.ListAuthors = data;
      this.loading = false;
    });
  }

  deleteAuthor(id:number){
    this.loading = true;
    this._authorService.remove(id).subscribe((data: any) => {
      this.getAuthors();
      alert('Autor eliminado')
    });
  }

}
