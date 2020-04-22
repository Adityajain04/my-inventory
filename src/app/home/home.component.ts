import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  products = [];
  displaySpiner = true;

  constructor(private user: UserService, private api: ApiService) { }
  
  ngOnInit() {

    this.api.get_data("")
      .subscribe((data) => {
        if(data['status'] == "ok"){
          data['results'].map(product => this.products.push(product));
          this.displaySpiner = false;
        }
      })
  }
}
