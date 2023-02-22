import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PerfilModel } from 'src/app/Models/perfil-model/PerfilModel';
import { ApiService } from 'src/app/Service/api.service';
import { LoginService } from 'src/app/Service/login/login.service';
import { CargarScriptsService } from './../../cargar-scripts.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    username: new FormControl('', Validators.required), 
    password: new FormControl('', Validators.required)
  }); 
  
  em = " "; 
  pass = " "; 
  showPanel = false;

  constructor( public fb:FormBuilder, public apiservice:ApiService, public dialog:MatDialog, public loginservice: LoginService, public router:Router, private _CargarScripts: CargarScriptsService) { 

    _CargarScripts.Cargar(["login"])
  
    
    
    


  }
  async onSubmit(){
   
    this.em = this.loginForm.controls["username"].value+""; 
    this.pass = this.loginForm.controls["password"].value+""; 
    var splitted = this.em.split("@"); 
    this.em = splitted[0]+"%40"+splitted[1];
    var Dataresponse:any = await (this.apiservice.login("Usuarios", this.em, this.pass))
    var user = Dataresponse[0]; 
    console.log(Dataresponse)
    console.log(this.em)


    if(this.em == user.NombreUsuario && this.pass == user.ClaveUsuario){
 
    }else{
      //alert("registro exitoso");
      localStorage.setItem('login', 'login');
      this.loginservice.login.next("login");
    }
  }
  ngOnInit(): void {
    
    
   /* this.signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });*/
  }
  signUp(){
    this.showPanel = true;
  
}
    
    
  
    //console.log(container?.outerHTML)
   
  
  signIn(){
    this.showPanel = false;
  }

}




