import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  displaySpiner = true;
  username: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
    this.displaySpiner = false;
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     // this.router.navigate(["user"]);
    }else {
      alert("Invalid credentials");
    }
  }
}
