import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PerfilModel } from 'src/app/Models/perfil-model/PerfilModel';
import { ApiService } from 'src/app/Service/api.service';
import { LoginService } from 'src/app/Service/login/login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    username: new FormControl('', Validators.required), 
    password: new FormControl('', Validators.required)
  }); 
  
  em = " "; 
  pass = " "; 
  

  constructor( public fb:FormBuilder, public apiservice:ApiService, public dialog:MatDialog, public loginservice: LoginService, public router:Router ) { }
  async onSubmit(){
    this.em = this.loginForm.controls["username"].value+""; 
    this.pass = this.loginForm.controls["password"].value+""; 

    var Dataresponse:any = await (this.apiservice.login("Usuarios", this.em, this.pass))
    var user = Dataresponse[0]; 

    if(this.em == user.NombreUsuario && this.pass == user.ClaveUsuario){
 
    }else{
      alert("registro exitoso");
      this.router.navigateByUrl("/Usuarios");
      this.loginservice.user.next(user);
      this.loginservice.login.next("login");
    }
  }
  ngOnInit(): void {
  }

}




