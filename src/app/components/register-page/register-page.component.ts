import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }  
  
  onSubmitRegister(){
    this.authService.registerUser(this.email, this.password)
    .then((res)=>{
      // Respuesta enviada por Firebase
      console.log(res);
      // Redirección 
      this.router.navigate(['/admin']);

    }).catch((err)=>{
      console.log(err);
    });
  }

}
