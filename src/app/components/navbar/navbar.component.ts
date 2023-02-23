import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isEnabled = true;

  constructor(private router: Router){}

  toHome(){
    this.router.navigate(['home']);
  }
}
