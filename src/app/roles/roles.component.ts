import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles = [
    {id: 1, name: 'admin'},
    {id: 2, name: 'normal'}
  ];
  pageSize = 5;
  currentPage = 0;
  totalSize = this.roles.length;
  columnsToDisplay = ['id', 'name', 'action']

  constructor() { }

  ngOnInit(): void {
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
