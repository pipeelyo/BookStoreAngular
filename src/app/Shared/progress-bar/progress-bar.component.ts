import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  auth = localStorage.getItem('login');
  isLoggin: boolean = !this.auth? true : false;

}
