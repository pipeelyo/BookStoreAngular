import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserInterface } from '../../Interfaces/user-interface';
import { ProgressBarComponent } from '../../Shared/progress-bar/progress-bar.component';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, ProgressBarComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  formUser: FormGroup; 
  loading: boolean = false;
  constructor(private fb: FormBuilder, private _userService: UserService, private router: Router){
    this.formUser = this.fb.group({
      Email: ['', Validators.required],
      FirstName:['', Validators.required],
      LastName: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  addUser = () => {
    const user: UserInterface = {
      email: this.formUser.value.Email,
      firstName: this.formUser.value.FirstName,
      lastName: this.formUser.value.LastName,
      password: this.formUser.value.Password,
      rol: 'user',
      creationDate: new Date(),
    }
    this._userService.create(user).subscribe(() => {
      alert('Usuario agregado');
      this.router.navigate(['/']);
    });  
    
  }

}
