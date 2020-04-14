import { Component, OnInit, ViewChild } from '@angular/core';

import { ApiService } from '../api.service';
import { Role } from './role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles = [];
  pageSize = 5;
  currentPage = 0;
  totalSize = this.roles.length;
  columnsToDisplay = ['id', 'name', 'action']

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get_data("admin/roles.json")
      .subscribe((data) => {
        if(data['status'] == "ok"){
          data['results'].map(role => this.roles.push(role));
          this.totalSize = this.roles.length;
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
    const part = this.roles.slice(start, end);
    this.roles = part;
  }
}
