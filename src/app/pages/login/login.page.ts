import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin={
    nombreusuario: "",
    password: "",
  }

  nombreusuario: string=""
  password: string=""

  constructor (private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion(){

    console.log("rut"+ this.formLogin.nombreusuario)
    console.log("paswword"+this.formLogin.password)

    let datosEnviar : NavigationExtras = {
      queryParams : {
      nombreusuarioU: this.formLogin.nombreusuario,
      edad: 20
     }
    }

    this.router.navigate(['/home']);

  }

}
