import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-normal-user',
  templateUrl: './normal-user.component.html',
  styleUrls: ['./normal-user.component.css']
})
export class NormalUserComponent implements OnInit {

  users = [];
  displaySpiner = true;
  pageSize = 5;
  currentPage = 0;
  totalSize = this.users.length;
  columnsToDisplay = ['id', 'name', 'username', 'email', 'action'];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
     this.api.get_data("admin/normal_users.json")
      .subscribe((data) => {
        if(data['status'] == "ok"){
          data['results'].map(user => this.users.push(user));
          this.totalSize = this.users.length;
          this.displaySpiner = false;
        }
      })
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.users.slice(start, end);
    this.users = part;
  }

}
