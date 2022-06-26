import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title='formLogin';
  public formLogin!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
  });
  }

  mostrar(): any{
    var usuario = this.formLogin.controls['username'].value;
    var contra = this.formLogin.controls['password'].value;
    alert("Usuario: "+usuario+"\nContraseña: "+contra+"\nAquí se obtienen los datos, se procesan en la API del angel");
  }
}
