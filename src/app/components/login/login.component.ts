import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title='formLogin';
  public formLogin!: FormGroup;
  captcha: string;
  constructor(private formBuilder: FormBuilder, private route:Router) {
    this.captcha = '';
   }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
  });
  }

  procesar(): any{
    var usuario = this.formLogin.controls['username'].value;
    var contra = this.formLogin.controls['password'].value;
    alert("Usuario: "+usuario+"\nContraseña: "+contra+"\nAquí se obtienen los datos, se procesan en la API del angel");
    this.isAdmin(usuario,contra);
  }

  isAdmin(user:String,password:String): any{
    if(user=="nsfwteam" && password=="123"){
      alert("sos el admin");
      this.route.navigate(['/adminpanel']);
      
    }else{
      this.route.navigate(['/profile']);
    }
    return;
  }

  resolved(captchaResponse: string){
    this.captcha = captchaResponse;
    console.log('captcha resuleto con respuesta: '+this.captcha);
  }
}
