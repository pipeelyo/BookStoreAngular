import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isLogget: boolean = false;

  constructor(private router: Router){
  }

  ngOnInit(): void {
    const local = localStorage.getItem('login');
    if(local !== null){
      this.isLogget = true;
    }
  }

  logout(): void {
    this.isLogget = false;
    localStorage.removeItem('login');
    this.router.navigate(['/login']);
  }

  navigateToAuthor = () => {
    this.router.navigate(['/author']);
  }

  navigateToUser = () => {
    this.router.navigate(['/formuser']);
  }

  navigateToLogin = () => {
    this.router.navigate(['/login']);
  }


  navigateToBook = () => {
    this.router.navigate(['/book']);
  }

}
