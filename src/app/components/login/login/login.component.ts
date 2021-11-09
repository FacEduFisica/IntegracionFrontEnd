import { Component, OnInit } from '@angular/core';
import { Socialusers } from '../GmailUser';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angular-6-social-login';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  response;
  socialusers = new Socialusers();
  loginForm: FormGroup;
  mensajeLogin:any;
  mensajeRegister:any;
  constructor(public OAuth: AuthService,
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginUser() {
      if(this.loginForm.valid)
      {
        this.loginService.login(this.loginForm.getRawValue()).subscribe((data) => 
        {
          if(data.status==200)
          {
            this.loginService.handleLoginCallback(data.data);
            this.mensajeLogin = "Se ha logueado correctamente";
            this.router.navigate([`/home`]);
          }else
          {
            this.mensajeLogin = data.data;
          }
        })
      }else
      {
        this.mensajeLogin = "Debe llenar todos los campos"
      }
  }
}
