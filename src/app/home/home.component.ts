import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router){}

  navigateToProducts(){
    this.router.navigateByUrl('/products')
  }

  navigateToUser(){
    this.router.navigateByUrl('/user')
  }

}
