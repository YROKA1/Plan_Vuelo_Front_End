import { Component } from '@angular/core';
import { LoginService } from './Service/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RADER';
  login: String = "";

  constructor(public loginservice: LoginService){ }
  ngOnInit(): void {
    if (this.loginservice.user.value != null) { 
      this.loginservice.login.next("login");
    } else { 
      this.loginservice.login.next("logout");
    }

    this.loginservice.login.subscribe(value => { 
      this.login = value;
      console.log(this.login);
    })
  }
}
