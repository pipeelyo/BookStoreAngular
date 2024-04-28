import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin: FormGroup;
  constructor(private fb: FormBuilder, private _userService: UserService, private router: Router) {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login = () => {
    const login = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password,
    }
    this._userService.login(login).subscribe((data) => {
      console.log('data =', data);
      localStorage.setItem('login', JSON.stringify(data))
      this.router.navigate(['/book']);
    })
  }
}
