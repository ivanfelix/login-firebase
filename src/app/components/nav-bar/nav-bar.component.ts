import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public isLogged: boolean;
  public user: string;
  public email: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLogged = true;
        this.user = auth.displayName;
        this.email = auth.email;
      }else{
        this.isLogged = false;
      }
    });
  }

  logout(){
    this.authService.logout();
  }

}
