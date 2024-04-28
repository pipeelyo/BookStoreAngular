import { Routes } from '@angular/router';
import { ListBooksComponent } from './Components/list-books/list-books.component';
import { AddEdditProductComponent } from './Components/add-eddit-product/add-eddit-product.component';
import { ListAuthorsComponent } from './Components/list-authors/list-authors.component';
import { LoginComponent } from './Components/login/login.component';
import { AddEditAuthorComponent } from './Components/add-edit-author/add-edit-author.component';
import { AddUserComponent } from './Components/add-user/add-user.component';

export const routes: Routes = [
    { path: 'book', component: ListBooksComponent },
    { path: 'author', component: ListAuthorsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'formlibro/:id', component: AddEdditProductComponent },
    { path: 'formauthor/:id', component: AddEditAuthorComponent },
    { path: 'formuser', component: AddUserComponent },
    { path: '', redirectTo:'/login', pathMatch: 'full'}
];
