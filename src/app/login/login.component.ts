import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularTokenService } from 'angular-token';

import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  displaySpiner = true;
  email: string;
  password: string;

  constructor(
    private router: Router,
    private api: ApiService,
    private tokenService: AngularTokenService,
    private user: UserService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    if(this.user.isLogged()){
      this.toastr.error("User is already loggedin.")
      this.router.navigate(['home']);
    }else{
      this.displaySpiner = false;
    }
  }

  login() : void {
    this.displaySpiner = true;
    if(this.email !== '' && this.password !== ''){
      this.tokenService.signIn({
        login:    this.email,
        password: this.password
      }).subscribe(
          res =>  {
            if(res.status == 200){
              this.user.setToken(res['headers'].headers.get('access-token'))
              this.user.setClient(res['headers'].headers.get('client'))
              this.user.setUid(res['headers'].headers.get('uid'))
              this.api.get_data(`users/${res['body'].data.id}`)
                  .subscribe((data) => {
                    if(data['status'] == 'ok'){
                      this.user.setCurrentUser(data['result'])
                    }else{
                      console.log('User Roles Error:', data)
                    }
                  })
              /**this.tokenService.validateToken().subscribe(
                res => console.log(res),
                error => console.log(error)
              );*/
              this.toastr.success("You have successfully loggedIn.")
              this.router.navigate(['home']);
            }else{
              this.displaySpiner = false;
            }
          },
          error => {
            this.displaySpiner = false;
            console.log(error['error'].errors[0])
            this.toastr.error(error['error'].errors[0])
          }
      );
    }else {
      this.displaySpiner = false;
      this.toastr.error("All fields are needed.")
    }
  }
}
