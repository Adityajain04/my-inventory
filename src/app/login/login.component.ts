import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  displaySpiner = true;
  username: string;
  password: string;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.displaySpiner = false;
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     // this.router.navigate(["user"]);
     this.toastr.success("You have clicked on login.")
    }else {
      this.toastr.error("Invalid credentials.")
    }
  }
}
