import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  displaySpiner = true;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  confirm_password: string;

  constructor() { }

  ngOnInit(): void {
    this.displaySpiner = false;
  }

  sign_up(): void {

  }

}
