import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private authService : AuthService ) { }

  ngOnInit(): void {
  }

  logOutUser() {
    this.authService.logOut()
  }
  

}
